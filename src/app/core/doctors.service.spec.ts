import { TestBed, async, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { DoctorsService } from './doctors.service';
import { Doctor } from './models';

describe('DoctorsService', () => {
  let doctorsService: DoctorsService;
  let httpMock: HttpTestingController;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorsService]
    });
    doctorsService = TestBed.inject(DoctorsService);
    httpMock = TestBed.get(HttpTestingController);
  });
   
  it('should create service', () => {
    expect(doctorsService).toBeTruthy();
  });

  it(`should fetch doctors as an Observable`, async(inject([HttpTestingController, DoctorsService],
    (httpClient: HttpTestingController, doctorsService: DoctorsService) => {
  
    const response = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    ]
    
    doctorsService.getDoctors().subscribe((doctors: Doctor[]) => {
      expect(doctors.length).toBe(1);
    });
   
    let req = httpMock.expectOne(environment.ROUTES.DOCTORS_ROUTE);
    expect(req.request.method).toBe("GET");
   
    req.flush(response);
    httpMock.verify();
   
  })));
});
