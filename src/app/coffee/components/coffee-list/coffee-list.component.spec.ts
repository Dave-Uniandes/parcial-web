import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Coffee } from '../../coffee_class/coffee';
import { CoffeeListComponent } from './coffee-list.component';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let responseMock: Coffee[] = [
    {
        "id": 1,
        "nombre": "Café Especial para tí",
        "tipo": "Blend",
        "region": "Angelópolis, Antioquia",
        "sabor": "Panela, Durazno, Caramelo",
        "altura": 1920,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-para-ti-colores-cafe-colombiano-f_1_720x.jpg"
    },
    {
        "id": 2,
        "nombre": "Café Especial Navegante",
        "tipo": "Café de Origen",
        "region": "Guatapé, Antioquia",
        "sabor": "Cítrico, Naranja, Cacao",
        "altura": 1800,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png"
    },
    {
        "id": 3,
        "nombre": "Café Especial El Prístino",
        "tipo": "Blend",
        "region": "Chinchiná, Caldas",
        "sabor": "Chocolate negro, Caramelo",
        "altura": 1700,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('table should create with 3 items', () => {
    const table = document.querySelector('table#coffeeTable');
    component.coffeeList = responseMock;
    expect(table).toBeTruthy();
  });

  it('table should create with 3 items', () => {
    component.coffeeList = responseMock;
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(component.coffeeList.length).toBe(3);
  });
  
});
