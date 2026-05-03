export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  let onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function onMouseOver(event) {
    const toolTipBox = createTooltipBox(this);
    toolTipBox.style.top = event.pageY + 20 + "px";
    toolTipBox.style.left = event.pageX + 20 + "px";

    onMouseLeave.tooltipBox = toolTipBox;
    onMouseMove.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseMove = {
    toolTipBox: "",
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + "px";
      this.toolTipBox.style.left = event.pageX + 20 + "px";
    },
  };

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
