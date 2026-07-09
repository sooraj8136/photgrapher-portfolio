import { useNavigate } from "react-router-dom";
import SplitText from "../components/SplitText";
import "./PageShell.css";

type Props = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function PageShell({ eyebrow, title, children }: Props) {
  const navigate = useNavigate();
  return (
    <div className="page">
      <section className="page__hero">
        <div className="page__meta">
          <button className="ulink" onClick={() => navigate("/")}>
            <span className="arrow">←</span> Back
          </button>
          <span className="label">{eyebrow}</span>
        </div>
        <SplitText
          text={title}
          as="h1"
          className="page__title"
          stagger={0.09}
        />
      </section>
      {children}
    </div>
  );
}
