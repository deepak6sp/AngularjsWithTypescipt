import {Service} from './service';

interface IController {
    getMovieDataService: () => void
}

export class Controller implements IController {

    public title: string;

    static $inject = ["MyService"];

    constructor(private MyService: Service) { 
        this.title = "Click the button";
    }

    public getMovieDataService(): void {
        this.MyService.getMovieData()
        .then(response => {
            this.title = response.data[0].title;
        });
    }
}

