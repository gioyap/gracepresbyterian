// src/app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET(request: NextRequest) {
	const supabase = createClient();
	const url = new URL(request.url);
	const searchQuery = url.searchParams.get("s") || "";
	const page = Number(url.searchParams.get("page")) || 1;
	const perPage = 10;
	const offset = (page - 1) * perPage;

	if (!searchQuery) {
		return NextResponse.json(
			{ error: "Search query is required" },
			{ status: 400 }
		);
	}

	try {
		// Query Supabase for matching articles/sermons
		const { data, error, count } = await supabase
			.from("sermons") // Replace 'sermons' with your actual table name
			.select("title, summary, url", { count: "exact" })
			.or(`title.ilike.%${searchQuery}%,summary.ilike.%${searchQuery}%`)
			.range(offset, offset + perPage - 1); // Pagination

		if (error) {
			throw error;
		}

		return NextResponse.json({
			results: data,
			total: count,
		});
	} catch (error) {
		console.error("Error fetching data:", error);
		return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
	}
}
