import React from "react";
import Spline from "@splinetool/react-spline";

export default function SplineCanvas({ scene }) {
  return <Spline className="splin" scene={scene} />;
}
