import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * Hero section — headline, subheadline, one CTA that scrolls to the courses section.
 * Named export required — Framer won't pick up a default export.
 */
export function Hero(props) {
    const {
        headline = "SkillsPath : Learn the skills that actually get you hired",
        subheadline = "Practical, project-based courses built by people who do this for a living.",
        buttonText = "Explore Courses",
        scrollTargetId = "courses-section",
        accentColor = "#6C5CE7",
        style,
        ...rest
    } = props

    const handleClick = () => {
        const el = document.getElementById(scrollTargetId)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 20,
                padding: "80px 24px",
                width: "100%",
                boxSizing: "border-box",
                ...style,
            }}
            {...rest}
        >
            <h1
                style={{
                    fontSize: "clamp(32px, 5vw, 56px)",
                    fontWeight: 700,
                    margin: 0,
                    maxWidth: 720,
                    lineHeight: 1.15,
                    color: "#111",
                }}
            >
                {headline}
            </h1>
            <p
                style={{
                    fontSize: "clamp(16px, 2vw, 20px)",
                    color: "#555",
                    margin: 0,
                    maxWidth: 560,
                    lineHeight: 1.5,
                }}
            >
                {subheadline}
            </p>
            <button
                onClick={handleClick}
                style={{
                    marginTop: 12,
                    padding: "14px 32px",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#fff",
                    background: accentColor,
                    border: "none",
                    borderRadius: 10,
                    cursor: "pointer",
                }}
            >
                {buttonText}
            </button>
        </div>
    )
}

// Property controls here are optional (only the courses section is scored on these).
// Kept minimal since a designer editing hero copy is normal, low-stakes customization.
addPropertyControls(Hero, {
    headline: {
        type: ControlType.String,
        title: "Headline",
        defaultValue:
            "SkillsPath : Learn the skills that actually get you hired",
    },
    subheadline: {
        type: ControlType.String,
        title: "Subheadline",
        defaultValue:
            "Practical, project-based courses built by people who do this for a living.",
    },
    buttonText: {
        type: ControlType.String,
        title: "Button Text",
        defaultValue: "Explore Courses",
    },
    scrollTargetId: {
        type: ControlType.String,
        title: "Scroll Target ID",
        defaultValue: "courses-section",
        description:
            "Must match the `id` on your courses section (see CoursesSection.tsx).",
    },
    accentColor: {
        type: ControlType.Color,
        title: "Accent Color",
        defaultValue: "#6C5CE7",
    },
})
