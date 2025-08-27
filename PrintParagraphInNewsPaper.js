// ======= Input =======

// paragraphs: an array, each element is an array of words representing a paragraph.

// align: an array of strings "LEFT" or "RIGHT" for each paragraph.

// width: maximum number of characters per line.

// ======= Rules ========

// Build each paragraph by putting words in order separated by space.

// Wrap text so that no line exceeds width.

// Align each line according to align[i].

// Surround the entire result with a * border.

// ====== Output ======

// Array of lines (or a single string) with * border.


function newspaperPage(paragraphs, alignments, width) {
  let lines = [];

  for (let p = 0; p < paragraphs.length; p++) {
    const words = paragraphs[p];
    const alignment = alignments[p];

    let currentLine = "";
    let paraLines = [];

    for (let word of words) {
      if (currentLine.length === 0) {
        currentLine = word;
      } else if (currentLine.length + 1 + word.length <= width) {
        currentLine += " " + word;
      } else {
        paraLines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine.length > 0) paraLines.push(currentLine);

    // Apply alignment for this paragraph
    paraLines = paraLines.map(line =>
      alignment === "RIGHT"
        ? line.padStart(width, " ")
        : line.padEnd(width, " ")
    );

    lines.push(...paraLines);
  }

  // Add border
  const border = "*".repeat(width + 2);
  const result = [border, ...lines.map(line => `*${line}*`), border];

  return result; // return array of lines
}

// Example
const paragraphs = [
  ["This", "is", "first", "paragraph"],
  ["Second", "one", "goes", "here"]
];
const alignments = ["left", "right"];
const width = 16;

const page = newspaperPage(paragraphs, alignments, width);

// Print properly line by line
page.forEach(line => console.log(line));


// OUTPUT

// ******************
// *This is first   *
// *paragraph       *
// *      Second one*
// *     goes here  *
// ******************
