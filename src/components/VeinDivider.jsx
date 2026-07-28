import { C,fontBody as bFont,fontDisplay as dFont } from '../data/theme.js'
function VeinDivider({ color = C.gold, width = 140 }) {
  return (
    <svg width={width} height="18" viewBox="0 0 140 18" fill="none" style={{ display: "block", margin: "0 auto" }}>
      <path
        d="M2 9 C 20 2, 30 16, 48 9 S 78 2, 96 9 S 120 15, 138 8"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="70" cy="9" r="3" fill={color} />
    </svg>
  );
}
export default VeinDivider