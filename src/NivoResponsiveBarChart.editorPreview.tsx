import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <span>Nivo Responsive Bar Chart</span>;
}

export function getPreviewCss(): string {
    return require("./ui/NivoResponsiveBarChart.css");
}
