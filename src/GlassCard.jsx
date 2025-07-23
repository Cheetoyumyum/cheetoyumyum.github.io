export default function GlassCard({ children, style = {} }) {
  return (
    <div className="glass-pane" style={style}>
      {children}
    </div>
  );
}
