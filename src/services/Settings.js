import moment from "moment";
const googleMapsKey = "AIzaSyCWhH2NPyQetiBvGGGWGYDKPYtbIGznmN0";

export const settings = {
  baseUrl: "https://cors-anywhere.herokuapp.com/" + process.env.REACT_APP_API_BASEURL,
  client: {
    getAllClients: '/api/Client',
    getClient: '/api/Client/$[id]',
    updateClient: '/api/Client/$[id]',
    postClient: '/api/Client'
  },
  product: {
    getAllProducts: '/api/ShopifyIntegration/GetAllProducts/',
    getProduct: '/api/ShopifyIntegration/GetAllProducts/$[id]',
    synchronizeProducts: '/api/ShopifyIntegration/SyncStore/'
  },
  user: {
    getAllUsers: '',
    getUser: '',
    updateUser: '',
    postUser: ''
  },
  role: {
    getAllRoles: '',
    getRole: '',
    updateRole: '',
    postRole: ''
  },
  module: {
    getAllModules: '',
    getModule: '',
    updateModule: '',
    postModule: ''
  },
  order: {
    getAllOrders: '/api/Order/',
    getOrder: '/api/Order/$[id]',
    updateOrder: '',    
  },
  ecommerceSystem: {
    getAllEcommerceSystems: '/api/EcommerceSystem',
    postEcommerceSystem: '/api/EcommerceSystem',
    updateEcommerceSystem: '/api/EcommerceSystem/$[id]',
    getEcommerceSystem: '/api/EcommerceSystem/$[id]'
  },
  marketplace: {
    getAllMarketplaces: '/api/MarketPlace',
    postMarketplace: '/api/MarketPlace',
    updateMarketplace: '/api/MarketPlace/$[id]',
    getMarketplace: '/api/MarketPlace/$[id]'
  }  
  // userObj: "local_user_object",
  // firstLogin: "first_login_state",
  // https: false,
  // googleMapsKey,
  // agent: {
  //   registerAgent: "/api/account/agents/registration",
  //   login: "/api/account/agents/login",
  //   logoutAgent: "/api/account/agents/logout",
  //   deleteAgent: "",
  //   passwordChange: "/api/account/agents/password/change",
  //   updateAgent: "/api/account/agents/$[id]",
  //   getAgent: "/api/account/agents/$[id]",
  //   activateAgent: "/api/account/agents/activate",
  //   acceptAgent: "/api/account/agents/$[id]/accept",
  //   createSearchTerm: "/api/account/agentrecentsearches"
  // },
  // agency: {
  //   createAgency: "/api/account/agencies",
  //   getAgencies: "/api/account/agencies?limit=$[limit]&offset=$[offset]",
  //   searchAgencies:
  //     "/api/account/agencies?limit=$[limit]&offset=$[offset]&search=$[search]&ordering=$[ordering]"
  // },
  // country: {
  //   searchCountries:
  //     "/api/account/countries?limit=$[limit]&offset=$[offset]&search=$[search]&ordering=$[ordering]",
  //   getCountryDetails: "/api/account/countries/$[id]"
  // },
  // locations: {
  //   getLocations: "/api/locations?limit=$[limit]&offset=$[offset]",
  //   getRecommendedLocations: "/api/locations/recommended?act=$[act]",
  //   getLocationDetails: "/api/locations/$[id]",
  //   updateContactPersonEmail: "/api/locations/$[id]",
  //   uploadProperty: "/api/locations",
  //   uploadPropertyRentalPirce: "/api/locations-rental-price",
  //   updateProperty: "/api/locations/$[id]",
  //   updatePropertyRentalPirce: "/api/locations-rental-price/$[id]",
  //   locationImages: "/api/locations-images",
  //   locationFloorplan: "/api/locations-floor-plans",
  //   deleteLocationImage: "/api/locations-images/$[id]",
  //   deleteLocationFloorplan: "/api/locations-floor-plans/$[id]"
  // },
  // applicant: {
  //   createApplicant: "/api/applicants",
  //   getApplicant: "/api/applicants?limit=$[limit]&offset=$[offset]",
  //   updateApplicant: "/api/applicants/$[id]",
  //   getApplicantDetails: "/api/applicants/$[id]",
  //   searchApplicant:
  //     "/api/applicants?limit=$[limit]&offset=$[offset]&agent=$[agent]&search=$[search]&ordering=$[ordering]",
  //   getLocations: "/api/applicants/$[id]/locations",
  //   uploadApplicantCsv: "/api/applicant-csv-upload",
  //   getRecommendedLocations: "/api/applicants/$[id]/recommended_locations",
  //   getRequestedProperties: "/api/applicants/requested_properties?act=$[act]"
  // },
  // viewing: {
  //   createViewing: "/api/viewings",
  //   getViewing: "/api/viewings?limit=$[limit]&offset=$[offset]",
  //   getApplicantViewing: "/api/viewings?applicant=$[id]",
  //   acceptViewing: "/api/viewings/$[id]/accept",
  //   declineViewing: "/api/viewings/$[id]/decline"
  // },
  // areas: {
  //   getArea: "/api/areas/$[id]",
  //   getAreas: "/api/areas?limit=$[limit]&offset=$[offset]",
  //   searchAreas:
  //     "/api/areas?limit=$[limit]&offset=$[offset]&search=$[search]&ordering=$[ordering]",
  //   createArea: "/api/areas/"
  // },
  // ticket: {
  //   giver: {
  //     createGiverTicket: "/api/giver-tickets",
  //     getTicket: "/api/giver-tickets/$[id]",
  //     updateGiverTicket: "/api/giver-tickets/$[id]",
  //     updateGiverTicketLive: "/api/giver-tickets/$[id]/live",
  //     acceptGiverTicket: "/api/giver-tickets/$[id]/accept",
  //     rejectGiverTicket: "/api/giver-tickets/$[id]/reject",
  //     requestGiverTicket: "/api/giver-tickets/$[id]/request",
  //     withdrawGiverTicket: "/api/giver-tickets/$[id]/withdraw",
  //     locStillAvailable: "/api/giver-tickets/$[id]/loc_still_available_usr_res",
  //     pocAvailabilityChecker:
  //       "/api/giver-tickets/loc_still_available_poc_res?action=$[action]&key=$[key]&propertyId=$[propertyId]"
  //   },
  //   taker: {}
  // },
  // offer: {
  //   createOffer: "/api/offers",
  //   getOffers: "/api/offers?limit=$[limit]&offset=$[offset]",
  //   getApplicantOffers: "/api/offers?applicant=$[id]"
  // },
  // googlePlaceAutocomplete: `https://maps.googleapis.com/maps/api/place/autocomplete/json?types=address&key=${googleMapsKey}&input=$[input]`,
  // googleMapsStaticMapImage: `https://maps.google.com/maps/api/staticmap?zoom=17&key=${googleMapsKey}`
};

// export const propertyType = [
//   { value: -1, label: "Select Property Type" },
//   { value: 0, label: "Terraced" },
//   { value: 1, label: "End terrace house" },
//   { value: 2, label: "Semi detached" },
//   { value: 3, label: "Detached" },
//   { value: 4, label: "Mews house" },
//   { value: 5, label: "House" },
//   { value: 6, label: "Flat" },
//   { value: 7, label: "Maisonette" },
//   { value: 8, label: "Bungalow" },
//   { value: 9, label: "Town house" },
//   { value: 10, label: "Cottage" },
//   { value: 11, label: "Farm barn" },
//   { value: 12, label: "Mobile static" },
//   { value: 13, label: "Land" },
//   { value: 14, label: "Studio" },
//   { value: 15, label: "Block of flats" },
//   { value: 16, label: "Office" },
//   { value: 17, label: "Parking garage" },
//   { value: 18, label: "Other" },
//   { value: 19, label: "Off plan" },
//   { value: 20, label: "Corporate" }
// ];

// export const propertyAct = [
//   { value: -1, label: "Select rent or sale" },
//   { value: 0, label: "Rent" },
//   { value: 1, label: "Sale" }
// ];

// export const bedNumbers = [
//   { value: 0, label: "All Beds" },
//   { value: 1, label: "1 Bed" },
//   { value: 2, label: "2 Bed" },
//   { value: 3, label: "3 Bed" },
//   { value: 4, label: "4 Bed" },
//   { value: 5, label: "5 Bed" },
//   { value: 6, label: "6 Bed" }
// ];

// export const focuses = [
//   { value: -1, label: "Your Main Need" },
//   { value: 0, label: "Applicants" },
//   { value: 1, label: "Properties" }
// ];

// export const rentalFrequency = [
//   { id: 2, label: "Per week" },
//   { id: 8, label: "Per month" }
// ];

// export const furnished = [
//   { value: "unknown", label: "Unknown" },
//   { value: "true", label: "Yes" },
//   { value: "false", label: "No" }
// ];

// export const parking = [
//   { value: "unknown", label: "Unknown" },
//   { value: "true", label: "Yes" },
//   { value: "false", label: "No" }
// ];

// export const petsAllowed = [
//   { value: "unknown", label: "Unknown" },
//   { value: "true", label: "Yes" },
//   { value: "false", label: "No" }
// ];

// export const propertyAvailability = [
//   { value: 0, label: "Open" },
//   { value: 1, label: "Closed by platform" },
//   { value: 2, label: "Closed on houzen" }
// ];

// export const propertyStatus = [
//   { value: 0, label: "Live" },
//   { value: 1, label: "Offline" }
// ];

// export const platform = [
//   { value: 0, label: "Houzen" },
//   { value: 1, label: "Zoopla" }
// ];

// export const giverTicketStatus = [
//   { value: 0, label: "Pending" },
//   { value: 1, label: "Accepted" },
//   { value: 2, label: "Declined" },
//   { value: 3, label: "Conducted" },
//   { value: 4, label: "Cancelled" }
// ];

// export const giverTicketStatus = [
//   { value: 0, label: "New" },
//   { value: 1, label: "Pending" },
//   { value: 2, label: "Live" },
//   { value: 3, label: "Rejected" },
//   { value: 4, label: "Success" },
//   { value: 5, label: "Close" }
// ];

// export const applicantDemographics = [
//   { value: -1, label: "Applicant's Demographics" },
//   { value: 0, label: "Full Time Employee" },
//   { value: 1, label: "Student" },
//   { value: 2, label: "Couple" },
//   { value: 3, label: "Family" },
//   { value: 4, label: "Entrepreneur" },
//   { value: 5, label: "Sharers" }
// ];

// export const userStatus = [
//   { value: 0, label: "Active" },
//   { value: 1, label: "Pending" },
//   { value: 2, label: "Wait listed" }
// ];

// export const focus = [
//   { value: 0, label: "Giver" },
//   { value: 1, label: "Taker" }
// ];

// export const agentPosition = [
//   { value: -1, label: "Position" },
//   { value: 0, label: "Director" },
//   { value: 1, label: "Sales Manager" },
//   { value: 2, label: "Lettings Manager" },
//   { value: 3, label: "Sales Negotiator" },
//   { value: 4, label: "Lettings Negotiator" }
// ];

// export const beds = [
//   { title: "Studio", value: false },
//   { title: "1 Bed", value: false },
//   { title: "2 Bed", value: false },
//   { title: "3 Bed", value: false },
//   { title: "4+ Bed", value: false }
// ];

// export const keyfeaturesList = [
//   { title: "Furnished", value: false },
//   { title: "Unfurnished", value: false },
//   { title: "Pets", value: false },
//   { title: "Parking", value: false },
//   { title: "Other", value: false }
// ];

// export const searchTypes = [
//   { value: 0, label: "Property" },
//   { value: 1, label: "ApplicantName" }
// ];

// export const agentRoles = {
//   XCHANGE: 0,
//   ILL: 1
// };

export const compareTwoDates = (startDate, endDate) => {
  var date1 = moment(startDate).format("YYYY-MM-DD HH:mm");
  var date2 = moment(endDate).format("YYYY-MM-DD HH:mm");

  // and i checked with if statement
  if (date1 > date2) {
    return "gt";
  } else if (date1 === date2) {
    return "eq";
  } else {
    return "lt";
  }
};
