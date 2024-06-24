import CompoundWords from "./compound-words"
import Words from "./words"
import WordParts from "./words copy"

export default function Tree() {
    return (
        <div id="tree">
            <CompoundWords />
            <Words />
            <WordParts />
        </div>
    )
}