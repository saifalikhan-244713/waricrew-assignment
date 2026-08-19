import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * Footer — three links and one copyright line.
 */

export function Footer(props) {
    const {
        links = [
            { label: "About", url: "#about" },
            { label: "Courses", url: "#courses-section" },
            { label: "Contact", url: "#contact" },
        ],
        style,
        ...rest
    } = props

    return (
        <footer
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                padding: "40px 24px",
                borderTop: "1px solid #eee",
                width: "100%",
                boxSizing: "border-box",
                background: "#fff",
                ...style,
            }}
            {...rest}
        >
            {/* Footer links */}
            <div
                style={{
                    display: "flex",
                    gap: 24,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {links.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        style={{
                            color: "#555",
                            textDecoration: "none",
                            fontSize: 14,
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Copyright */}
            <p
                style={{
                    fontSize: 13,
                    color: "#777",
                    margin: 0,
                    textAlign: "center",
                }}
            >
                © {new Date().getFullYear()} Skillpath. All rights reserved.
            </p>
        </footer>
    )
}

addPropertyControls(Footer, {
    links: {
        type: ControlType.Array,
        title: "Links",
        control: {
            type: ControlType.Object,
            controls: {
                label: {
                    type: ControlType.String,
                    title: "Label",
                },
                url: {
                    type: ControlType.String,
                    title: "URL",
                },
            },
        },
        defaultValue: [
            { label: "About", url: "#about" },
            { label: "Courses", url: "#courses-section" },
            { label: "Contact", url: "#contact" },
        ],
    },
})
