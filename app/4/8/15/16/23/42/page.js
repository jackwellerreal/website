"use client";

import { useState, useEffect } from "react";

function CustomCRTEffect({ children }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Swan</h1>
            </div>
        );
    }

    return (
        <div
            style={{
                position: "relative",
                backgroundColor: "#000",
                fontFamily: "monospace",
                padding: "20px",
                minHeight: "100vh",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    boxShadow: "inset 0 0 50px rgba(0, 255, 0, 0.1)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    textShadow: "0 0 10px #00ff00",
                    color: "#00ff00",
                }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes blink {
                            0%, 50% { opacity: 1; }
                            51%, 100% { opacity: 0; }
                        }
                    `,
                    }}
                />
                <div
                    style={{
                        color: "#00ff00",
                        fontSize: "32px",
                        margin: 0,
                        fontFamily: "monospace",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function Swan() {
    const [typedNumbers, setTypedNumbers] = useState("");

    const numbers = "4 8 15 16 23 42";

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Backspace") {
                setTypedNumbers((prev) => prev.slice(0, -1));
            } else if (e.key === "Enter") {
                if (typedNumbers === numbers) {
                    setTypedNumbers("");
                }
            } else if (e.key.length === 1) {
                setTypedNumbers((prev) =>
                    (prev + e.key).slice(0, numbers.length)
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [typedNumbers, numbers]);

    return (
        <CustomCRTEffect>
            {">:"}{typedNumbers}
            <span
                style={{
                    animation: "blink 2s infinite",
                    color: "#00ff00",
                }}
            >
                █
            </span>
        </CustomCRTEffect>
    );
}
