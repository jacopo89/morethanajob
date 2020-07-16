export const main = "/app/";
export const registration = "/app/registration";
export const login = "/app/login";
export const passwordRecovery = "/app/recover";
export const changePassword = "/app/passwordchange";



export const administration = "/app/administration";
export const projectPage = "/app/projects";
export const dashboardPage = "/app/dashboard";
export const newProjectPage = "/app/newproject";
export const newPortfolioPage = "/app/newportfolio";
export const newCollaborationPage = "/app/newcollaboration";
export const newServicePage = "/app/newservice";
export const collaborationDetailPage = "/app/collaboration/:id";
export const routeProfile = "/app/profile/:profilename";
export const routeProject = "/app/project/:id";
export const routeEditProject = "/app/editproject/:id";
export const routeEditCollaboration = "/app/editcollaboration/:id";
export const immediateLogout = "/app/immediatelogout";


export function profile(name){
    return "/app/profile/"+name;
}

export function project(id){
    return "/app/project/"+id;
}

export function editProject(id){
    return "/app/editproject/"+id;
}

export function collaboration(id){
    return "/app/collaboration/"+id;
}

export function editCollaboration(id){
    return "/app/editcollaboration/"+id;
}



