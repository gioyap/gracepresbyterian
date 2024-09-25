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
		const { data, error, count } = await supabase
			.from("sermons")
			.select("title, summary, url", { count: "exact" })
			.or(`title.ilike.%${searchQuery}%,summary.ilike.%${searchQuery}%`)
			.range(offset, offset + perPage - 1);

		if (error) {
			throw error;
		}

		// Add Cache-Control headers to prevent caching
		const response = NextResponse.json({
			results: data,
			total: count,
		});

		response.headers.set(
			"Cache-Control",
			"no-store, no-cache, must-revalidate, proxy-revalidate"
		);
		response.headers.set("Pragma", "no-cache");
		response.headers.set("Expires", "0");
		response.headers.set("Surrogate-Control", "no-store");

		return response;
	} catch (error) {
		console.error("Error fetching data:", error);
		return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
	}
}
