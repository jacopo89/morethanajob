export const main = "/";
export const registration = "/registration";
export const login = "/login";
export const passwordRecovery = "/recover";
export const changePassword = "/password-change";



export const administrationCategories = "/administration-categories";
export const administrationExpertise = "/administration-expertise";
export const administrationProjects = "/administration-projects";
export const administrationCollaborations = "/administration-collaborations";
export const administrationUsers = "/administration-users";
export const administrationNews = "/administration-news";
export const serviceSearchPage = "/services";
export const searchUserPage = "/partners";
export const dashboardPage = "/dashboard";
export const newProjectPage = "/newproject";
export const newPortfolioPage = "/newportfolio";
export const newCollaborationPage = "/newcollaboration";
export const newServicePage = "/newservice";
export const newFurniturePage = "/new-furniture";
export const collaborationDetailPage = "/collaboration/:id";
export const routeProfile = "/profile/:profilename";
export const routeProfileEdit = "/edit-profile/:profilename";
export const routeProject = "/project/:id";
export const routeEditProject = "/editproject/:id";
export const routeEditCollaboration = "/editcollaboration/:id";
export const routeEditService = "/editservice/:id";
export const immediateLogout = "/immediatelogout";


export function profile(name){
    return "/profile/"+name;
}


export function editProfile(name){
    return "/edit-profile/"+name;
}


export function project(id){
    return "/project/"+id;
}

export function editProject(id){
    return "/editproject/"+id;
}

export function collaboration(id){
    return "/collaboration/"+id;
}

export function editCollaboration(id){
    return "/editcollaboration/"+id;
}

export function editService(id){
    return "/editservice/"+id;
}

export function editFurniture(id){
    return "/edit-furniture/"+id;
}





