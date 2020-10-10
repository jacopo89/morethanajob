import SidebarPage from "../../Layout/SidebarPage";

export default function CentralAdministration(){
    const navBarItems = (
        <>
            <Nav.Item eventKey="1" icon={<Icon icon="info-circle" />} onClick={()=> history.push(`/coursemanagement/${code}/info`)}>Informazioni</Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="gear" />} onClick={()=> history.push(`/coursemanagement/${code}/composizione`)}>Composizione</Nav.Item>
            {/*  <Nav.Item eventKey="3" icon={<Icon icon="archive" />} onClick={()=> history.push(`/coursemanagement/${code}/argomenti`)}>Argomenti</Nav.Item>*/}
        </>);

    return <SidebarPage  />
}