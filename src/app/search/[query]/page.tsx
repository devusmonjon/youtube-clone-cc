import { encode, decode, parse, stringify } from "urlencode";

const SearchResults = ({ params }: { params: { query: string } }) => {
    const parsed: { query: string } = parse(`query=${params.query}`, {
        charset: "utf-8",
    });

    return (
        <div>
            <h1 className="text-center pt-4 text-3xl">
                Search results for:{" "}
                <span className="font-bold text-primary">{parsed.query}</span>
            </h1>
        </div>
    );
};

export default SearchResults;
