import {bordeaux} from "../styledComponents/CustomComponents";
import {Icon} from "rsuite";
import React from "react";

export default function Footer() {
    return (<div style={{width:"100%", backgroundColor:bordeaux, alignItems:"center", display:"flex", flexDirection:"column", padding:50}}>
        <div style={{display: "flex", width:250, justifyContent: "space-around"}}>
            <a target="_blank" href="http://facebook.com/morethanajob"><Icon style={{color:"white"}} icon="facebook-square" size="3x"/></a>
            <a target="_blank" href="http://www.linkedin.com/company/morethanajobeni/"><Icon style={{color:"white"}} icon="linkedin-square" size="3x"/></a>
            <a target="_blank" href="http://twitter.com/than_job"><Icon style={{color:"white"}} icon="twitter-square" size="3x" /></a> </div>
        <p style={{color:"white"}}><a style={{color:"whitesmoke"}} href="http://www.enicbcmed.eu/projects/morethanajob">http://www.enicbcmed.eu/projects/morethanajob</a></p>
        <div style={{marginTop:40}}>
            <span style={{color:"white", fontSize:9}}>“This website has been produced with the financial assistance of the European Union under the ENI CBC Mediterranean Sea Basin Programme. The contents of this document are the sole responsibility of CESIE and can under no circumstances be regarded as reflecting the position of the European Union or the Programme management structures.

            The 2014 2020 ENI CBC Mediterranean Sea Basin Programme is a multilateral Cross Border Cooperation ( initiative funded by the European Neighbourhood Instrument - ENI). The Programme objective is to foster fair, equitable and sustainable economic, social and territorial development, which may advance cross b order integration and valorise participating countries’ territories and values. The following 13 countries participate in the Programme: Cyprus, Egypt, France, Greece, Israel, Italy, Jordan, Lebanon, Malta, Palestine, Portugal, Spain, Tunisia. The Managing Authority (MA) is the Autonomous Region of Sardinia (Italy). Official Programme languages are Arabic, English and French. For more information, please visit:</span>
            <a style={{fontSize:9, color:"whitesmoke", display:"inline-block"}} target="_blank" href="https://www.enicbcmed.eu"> www.enicbcmed.eu</a>
            <span style={{color:"white", fontSize:9}}>. The European Union is made up of 27 Member States who have decided to gradually link together their know how, resources and destinies. Together, during a period of enlargement of 50 years, they have built a zone of stability, democracy and sustainable development whilst maintaining cultural diversity, tolerance and individual freedoms. The European Union is committed to sharing its achievements and its values with countries and peoples beyond its borders.”</span>
        </div>

    </div>)

}
