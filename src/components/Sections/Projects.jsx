// health services section trackers included

import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";
// Assets
// import ProjectImg1 from "../../assets/img/projects/1.png";
// import ProjectImg2 from "../../assets/img/projects/2.png";
// import ProjectImg3 from "../../assets/img/projects/3.png";
// import ProjectImg4 from "../../assets/img/projects/4.png";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
// import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
	return (
		<Wrapper id="projects">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Empowering Progress, Bridging Gaps: This is Why You Need Us</h1>
						<p className="font13">
							Transforming aspirations into opportunities, we bridge gaps in financial literacy, 
							<br />
							career growth, and equality because your empowerment is our priority.
						</p>
					</HeaderInfo>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/appointment"}>
								<ProjectBox
									// img={
									// 	"https://miro.medium.com/v2/resize:fit:850/1*GCzH4_nLnVOIPYNNdltOWA.jpeg"
									// }
									title="Fostering Financial Empowerment for Gender Equality"
									text="Empowering individuals with heightened confidence in financial decision-making, our initiative strategically diminishes gender disparities through accessible financial education, ensuring a future of equality and economic independence."
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/"}>
								<ProjectBox
									// img={
									// 	"https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2022/01/12171428/tw-38.png"
									// }
									title="Cultivating Careers: Empowering Women Through Professional Growth and Community Support"
									text="Unlocking new vistas of career opportunities, we champion the advancement of women by cultivating professional growth. Our initiative goes beyond by fostering a supportive community for women navigating the realms of financial literacy, ensuring collective success on their career journeys"
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/track"}>
								<ProjectBox
									// img={
									// 	"https://pub.mdpi-res.com/applsci/applsci-12-08116/article_deploy/html/images/applsci-12-08116-g002.png?1660386028"
									// }
									title="Technological Viability: Ensuring Robust Knowledge Graph with Comprehensive Data Assessment"
									text="We meticulously assess the availability and accessibility of data concerning women's skills, aspirations, and career trajectories to guarantee the collection and processing of ample information, fortifying the foundation of a robust and insightful knowledge graph "
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/signup"}>
								<ProjectBox
									// img={
									// 	"https://img.freepik.com/free-vector/messaging-fun-concept-illustration_114360-1563.jpg?t=st=1673089953~exp=1673090553~hmac=bc161ad549e1ec1594195cc081b58200698d41165d0ab281e5b3a4c2e0262395"
									// }
									title="Innovative Business Model: Diversifying Revenue Streams for Sustainable Growt"
									text="Exploring diverse revenue streams, including subscription fees, premium features, and strategic partnerships with educational institutions and employers, our innovative business model ensures sustainable growth and continued impact"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	padding: 100px 0;
	margin: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 60px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	position: relative;
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
	}
`;
const AddLeftInner = styled.div`
	width: 100%;
	position: absolute;
	top: -300px;
	left: 0;
	@media (max-width: 1190px) {
		top: -250px;
	}
	@media (max-width: 920px) {
		top: -200px;
	}
	@media (max-width: 860px) {
		order: 1;
		position: relative;
		top: -60px;
		left: 0;
	}
`;
const ImgWrapper = styled.div`
	width: 100%;
	padding: 0 15%;
	img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 400px) {
		padding: 0;
	}
`;
