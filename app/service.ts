import { IHttpService, IHttpPromise } from "angular";

interface IService {
    getMovieData: () => IHttpPromise<IMovieData> 
}

export interface IMovieData {
    "Title": String,
    "Year": number,
    "Rated": String,
    "Released": String,
    "Runtime": String
        
}

export class Service implements IService {

    static $inject = ["$http"];
    constructor(private $http: IHttpService) {

    }
    public getMovieData(): IHttpPromise<IMovieData> {
        return this.$http.get("/app/movieData.json");
    }
}