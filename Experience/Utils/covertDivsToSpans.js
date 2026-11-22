export default function (element) {
    element.style.overflow = "hidden";

    const text = element.innerText;
    const fragment = document.createDocumentFragment();

    for (const char of text) {
        const span = document.createElement("span");

        if (char === " ") {
            span.textContent = "\u00A0"; // non-breaking space
        } else {
            span.className = "animatedis";
            span.textContent = char;
        }

        fragment.appendChild(span);
    }

    element.replaceChildren(fragment);

    return element;
}
