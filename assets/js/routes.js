

export const main = "/";
export const registration = "/registration";
export const login = "/login";
export const passwordRecovery = "/recover";
export const changePassword = "/password-change";



export const administrationCategories = "/administration-categories";
export const administrationExpertise = "/administration-expertise";
export const administrationProjects = "/administration-projects";
export const administrationCollaborations = "/administration-collaborations";
export const administrationStatistics = "/administration-statistics";
export const administrationUsers = "/administration-users";
export const administrationNews = "/administration-news";
export const serviceSearchPage = "/services";
export const searchUserPage = "/organisations";
export const dashboardPage = "/dashboard";
export const newProjectPage = "/new-project";
export const newPortfolioPage = "/new-portfolio";
export const newCollaborationPage = "/new-collaboration";
export const newServicePage = "/new-service";
export const newFurniturePage = "/new-furniture";
export const collaborationDetailPage = "/collaboration/:id";
export const routeProfile = "/profile/:profilename";
export const routeProfileEdit = "/edit-profile/:profilename";
export const routeProject = "/project/:id";
export const routeEditProject = "/edit-project/:id";
export const routeEditCollaboration = "/edit-collaboration/:id";
export const routeEditService = "/edit-service/:id";
export const immediateLogout = "/immediatelogout";
export const privacy = "/privacy";
export var newsPage = "/news/all-news";
export const subGrantedProjectsPage = "/sub-granted-projects";

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
    return "/edit-project/"+id;
}

export function collaboration(id){
    return "/collaboration/"+id;
}

export function editCollaboration(id){
    return "/edit-collaboration/"+id;
}

export function editService(id){
    return "/edit-service/"+id;
}

export function editFurniture(id){
    return "/edit-furniture/"+id;
}





