import { Inject} from 'angular2/angular2';
import { BASE_URL } from '../registry';
import { Http, URLSearchParams } from 'angular2/http';

declare function fetch(url:string): any;

export class FlugService {
	
	private baseUrl: string;
	private http: Http;
	
	constructor(@Inject(BASE_URL) baseUrl: string, http: Http) {
		this.baseUrl = baseUrl;
		this.http = http;	
	}
	
	find(von, nach) {
		
		/*
		var url = this.baseUrl + "/flug"
				+ "?abflugOrt=" 
				+ encodeURIComponent(von) 
				+ "&zielOrt=" 
				+ encodeURIComponent(nach);
	
		return fetch(url)
			      .then((r) => r.json());
		*/
		
		var url = this.baseUrl + "/flug";
		
		var params = new URLSearchParams();
		params.append('abflugOrt', von);
		params.append('zielOrt', nach);
		
		return this
				.http
				.get(url, { search: params})
				.map(r => r.json());
			
			
			
		// function(r) { return r.json(); }	
		
	}
	
} 