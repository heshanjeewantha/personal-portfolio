import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
     <Col size={12} sm={6} md={7}> {/* Full width on extra small screens, two cards per row on small and medium screens */}
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} style={{ width: "100%", height: "auto" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
