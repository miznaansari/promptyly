"use client";

import React, { useEffect, useRef, useState } from "react";

const New = () => {
  const [nodes, setNodes] = useState([
    { id: "node1", label: "Connect", top: 100, left: 100 },
    { id: "node2", label: "Connect", top: 300, left: 300 },
    { id: "node3", label: "Connect", top: 100, left: 300 },
    { id: "node4", label: "Connect", top: 300, left: 100 },
  ]);

  const lineRefs = useRef([]);

  useEffect(() => {
    // Prevent running on server
    if (typeof window === "undefined") return;

    let LeaderLine;

    import("leader-line").then((module) => {
      LeaderLine = module.default || module;

      // Clean up previous lines
      lineRefs.current.forEach((line) => {
        if (line) line.remove();
      });
      lineRefs.current = [];

      for (let i = 0; i < nodes.length - 1; i++) {
        const startElem = document.getElementById(nodes[i].id);
        const endElem = document.getElementById(nodes[i + 1].id);

        if (startElem && endElem) {
          const line = new LeaderLine(startElem, endElem, {
            color: "#0073E6",
            size: 2,
            path: "straight",
            startPlug: "disc",
            endPlug: "arrow3",
          });
          lineRefs.current.push(line);
        }
      }
    });
  }, [nodes]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      {nodes.map((node) => (
        <div
          key={node.id}
          id={node.id}
          style={{
            position: "absolute",
            top: node.top,
            left: node.left,
            zIndex: 10,
          }}
        >
          <div
            className="
              HomepageFrontdoorIcon__icon
              HomepageFrontdoorIcon__icon--solid
            "
            data-js-target="HomepageFrontdoorIcon.solidIcon"
          >
            <div
              className="HomepageFrontdoorIcon__iconLogo"
              data-js-target="HomepageFrontdoorIcon.solidLogo"
            >
              <svg
                className="ProductIcon ProductIcon--Connect"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z"
                  fill="url(#product-icon-connect-Sticky-a)"
                />
                <path
                  d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z"
                  fill="#0073E6"
                />
                <path
                  d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z"
                  fill="url(#product-icon-connect-Sticky-b)"
                />
                <defs>
                  <linearGradient
                    id="product-icon-connect-Sticky-a"
                    x1="13"
                    y1="1.71"
                    x2="13"
                    y2="15.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#11EFE3" />
                    <stop offset=".33" stopColor="#15E8E2" />
                    <stop offset=".74" stopColor="#1FD3E0" />
                    <stop offset="1" stopColor="#21CFE0" />
                  </linearGradient>
                  <linearGradient
                    id="product-icon-connect-Sticky-b"
                    x1="20"
                    y1="15.72"
                    x2="20"
                    y2="27.24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00299C" />
                    <stop offset="1" stopColor="#0073E6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span
              className="HomepageFrontdoorIcon__label"
              data-js-target="HomepageFrontdoorIcon.label"
            >
              {node.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default New;
