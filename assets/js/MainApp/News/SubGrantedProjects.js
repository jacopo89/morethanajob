import NewsPanel from "../Administration/News/NewsPanel";
import React, {useEffect, useState} from "react";
import {Col, Divider, HelpBlock, Pagination, Panel, Row, TreePicker} from "rsuite";
import {
    BackTitle, bordeaux,
    FlexBetweenDiv,
    FlexCenterDiv,
    FrontTitle, MainButton,
    newsPagePicture, ProfileImage
} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import {useList} from "../../tools/list";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import * as Routes from "../../routes";

export default function SubGrantedProjects() {

    const {t} = useTranslation();

    const {data, get} = useList("news");
    const [page, setPage] = useState(1);

    const SUBGRANTED_PROJECTS = 5;

    useEffect(()=>get(page, {type:SUBGRANTED_PROJECTS}), [page]);

    const {list:news} = data;

    const sortedNews =news.sort((a,b)=> {
        return (a.creationTime.timestamp > b.creationTime.timestamp) ? -1 :1
    } )

    const newsPanels = sortedNews.map((item, index) =>
        <div key={index}>
            <NewsPanel key={index} news={item} />
            <Divider />
        </div>);

    return<>
        <img width={"100%"} src={newsPagePicture}/>
        <div style={{padding:20}}>

            <BackTitle >
                <FrontTitle>
                    {t('Need Help?')}
                </FrontTitle>
                {t('Need Help?')}
            </BackTitle>
            <FlexBetweenDiv>
                <PaginationNews/>
            </FlexBetweenDiv>

            <StaticProjects></StaticProjects>
            {newsPanels}
        </div>
    </>

}


function PaginationNews({activePage,setActivePage, totalItems}){
    const [state, setState] = useState({
        prev: true,
        next: true,
        first: true,
        last: true,
        ellipsis: true,
        boundaryLinks: true,
        activePage: activePage
    });

    const pageNumber = Math.ceil(totalItems/30);


    const handleSelect = (eventKey) => {
        setState({...state, activePage: eventKey });
        setActivePage(eventKey);
    }

    return (pageNumber===1) ?  <Pagination
        {...state}
        pages={pageNumber}
        maxButtons={5}
        activePage={state.activePage}
        onSelect={handleSelect}
    /> : <div></div>

}

function StaticProjects(){
    const projects = [
        {
            title: "Orjuwan",
            organizationImgUrl:"https://joinmorethanajob.org/uploads/users/90/PsdLogo%201080%20to%20300-615176adcf83d.png",
            organizationLink:"https://joinmorethanajob.org/profile/partners-for-sustainable-development",
            description:"Empowering 50 Palestinian youth through professional programs in the field of graphic design\n" +
                "and digital marketing fostering their capacities of self-employment, providing networking opportunities and\n" +
                "encouraging their entrepreneurship.",
            organizationName: "Partners for Sustainable Development"
        },
        {
            title: "Economic Empowerment of Poor Women from Less Fortunate Families",
            description:"Empowering women from disadvantaged backgrounds who financially support their families by making homemade products or other domestic activities. To achieve this aim, they will be involved in training programmes and activities on how to make their homemade products financially rewarding and having an economic return from those.",
            organizationName:"Civil Society of Nablus Governorate (CSNG)"
        },
        {
            title: "Social Solidarity Economy Values and Principles: Education and Training",
            description:"Empowering women in actively contributing to their communities’ economy by providing them with training and raising awareness approaches related to community solidarity-based economic models.",
            organizationName:"الدولية لدعم البحث العلمي التطبيقي"
        },
        {
            title: "Dairy and Cheese Production",
            description:"Fostering the employment of unemployed youth, poor families and Syrian refugees through training courses on the production of dietary products and the development of marketing strategies. Participants will be supported and guided on the market needs for the food industries in the interested areas.",
            organizationName:"جمعية شيحان الخيرية"
        },
        {
            title: "Psychosocial and economic resilience of women in deprived areas",
            description:"Supporting vulnerable women from rural areas by providing them with primary and essential protection services throughout peer-to-peer counselling sessions and their integration in the labour market by initiating income generation and employment opportunities.",
            organizationName: "Common effort"
        },
        {
            title: "Carving out a better path forward",
            description:"Addressing the inequalities in the Lebanese labour market by providing health and safety awareness sessions in the workplace, vocational training for under skilled workers and soft skills training.",
            organizationName: "PHI GROUP S.A.R.L"
        },
        {
            title: "The Game – Orientation to the Future",
            description:"Development of an employment orientation desk and peer-to-peer career guidance services to promote the social and labour inclusion of people with a migrant background and to support them in accessing other services available for them in the territory.\n",
            organizationName: "Per Esempio"
        },
        {
            title: "Artigianato Interculturale – NOZ",
            description:"Addressing the working conditions of street-sellers, in particular the ones with a migrant background, promoting the renewal of their business model in a sustainable, ethical and legal perspective. This will be done through training courses on digital and traditional handicraft and an information service on ethical and sustainable entrepreneurship.",
            organizationName: "CRESM",
            organizationLink:"https://joinmorethanajob.org/profile/cresm",
        },
        {
            title: "Guide your Career",
            description:"Developing a mentorship programme that will provide participants with opportunities to develop their career prospects, leadership and diversity skills needed to succeed in a dynamically changing labour market. The project aspires to shape the future community leaders through their interaction with experienced professionals. As a result, they will be able to build the interpersonal skills that are necessary for supporting all community members into reaching their full potential.",
            organizationName: "Symplexis",
            organizationLink:"https://joinmorethanajob.org/profile/symplexis",
            organizationImgUrl: "https://joinmorethanajob.org/uploads/users/89/ddddddddd-6144bc343c62d.png",
        },
        {
            title: "Educate and Act (EdAct)",
            description:"The project foresees the creation of online tools and web resources for delivering specialised courses in the areas of the labour market in which there is an identified shortage of workforce. An extra focus will be given to the skills needed for improving the beneficiaries’ public and civic participation, as well as their inclusion in society.",
            organizationName: "KMOP – Social Action and Innovation Centre",
            organizationLink:"https://joinmorethanajob.org/profile/kmop-%E2%80%93-social-action-and-innovation-centre-",
            organizationImgUrl: "https://joinmorethanajob.org/uploads/users/88/%20%CF%84%CE%AF%CF%84%CE%BB%CE%BFll-61447fc9be54f.png",
        },

    ]
    return projects.map((project,index) => <SubGrantedProjectDetail key={index} project={project}></SubGrantedProjectDetail>)
}


export function SubGrantedProjectDetail({project}){

    const history = useHistory();
    const { t, i18n } = useTranslation();
    const {language} = useSelector(state=>state);
    //const title = (project && project.language === language && project.localTitle!==null && project.localTitle.length!==0) ? project && project.localTitle  : project && project.title ;
    const title = project.title
    //const description = (project && project.language === language && project.localShortDescription!==null && project.localShortDescription.length!==0) ? project && project.localShortDescription  : project && project.shortDescription ;
    const description = project.description


    const backgroundImage = (project && project.organizationImgUrl) ? project.organizationImgUrl  : "/defaults/project_thumbnail.png";



    return <Panel header={
        <PortfolioPanelTitle title={title} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <a target="_blank" href={project.organizationLink ?? "#"}><ProfileImage src={backgroundImage} width={150} /></a>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}}>
                    <div style={{width:"100%", flexGrow:1}} >{description}
                    <HelpBlock style={{margin:"10px 0px"}}>{`by ${project.organizationName} `}</HelpBlock>
                    </div>
                </div>
            </Col>
        </Row>
    </Panel>

}

export function PortfolioPanelTitle({ title}){
    const { t, i18n } = useTranslation();
    return <div style={{backgroundColor:bordeaux, minHeight:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {title}
        </div>

    </div>
}
