import * as React from "react"

type CourseCardProps = {
    courseName: string
    description: string
    price: string | null
    extraFieldLabel: string
    extraFieldValue: string
    refundable?: boolean
    accentColor?: string
}

/**
 * Presentational only — no fetching, no state. Takes exactly what it needs
 * to render one card. Not meant to be dropped on canvas by itself; the
 * default props below just keep it from looking broken if that happens.
 */
export function CourseCard({
    courseName = "Course name",
    description = "Course description goes here.",
    price = null,
    extraFieldLabel = "Category",
    extraFieldValue = "—",
    refundable = false,
    accentColor = "#6C5CE7",
}: CourseCardProps) {
    return (
        <div style={cardStyle}>
            <h3 style={cardTitleStyle}>{courseName}</h3>
            <p style={cardDescStyle}>{description}</p>
            <div style={cardMetaRow}>
                <span style={{ fontWeight: 700, color: accentColor }}>
                    {price ?? "Price unavailable"}
                </span>
                <span style={badgeStyle}>
                    {extraFieldLabel}: {extraFieldValue}
                </span>
            </div>
            <span
                style={refundable ? refundableBadgeStyle : nonRefundableBadgeStyle}
            >
                {refundable ? "Refundable" : "Non-refundable"}
            </span>
        </div>
    )
}

const cardStyle: React.CSSProperties = {
    border: "1px solid #eee",
    borderRadius: 14,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    background: "#fff",
}
const cardTitleStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
}
const cardDescStyle: React.CSSProperties = {
    fontSize: 14,
    color: "#666",
    margin: 0,
    display: "-webkit-box",
    WebkitLineClamp: 2 as any,
    WebkitBoxOrient: "vertical" as any,
    overflow: "hidden",
}
const cardMetaRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
}
const badgeStyle: React.CSSProperties = {
    fontSize: 12,
    color: "#888",
    background: "#f4f4f4",
    padding: "4px 10px",
    borderRadius: 20,
}
const refundableBadgeStyle: React.CSSProperties = {
    fontSize: 11,
    color: "#0a7d32",
    background: "#e6f6ea",
    padding: "3px 8px",
    borderRadius: 20,
    width: "fit-content",
}
const nonRefundableBadgeStyle: React.CSSProperties = {
    fontSize: 11,
    color: "#666",
    background: "#f1f1f1",
    padding: "3px 8px",
    borderRadius: 20,
    width: "fit-content",
}
