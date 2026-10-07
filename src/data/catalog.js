export const catalog = {
  ropa: {
    'novedades': [{ img:'https://images.unsplash.com/photo-1543678577-3a30e977f0c8?q=80&w=600&auto=format&fit=crop', tag:'NUEVO', name:'Conjunto oversize urbano', price:'$68.00' }],
    'coleccion-completa': [{ img:'https://images.unsplash.com/photo-1543678577-3a30e977f0c8?q=80&w=600&auto=format&fit=crop', tag:null, name:'Camiseta básica', price:'$25.00' }],
    'mas-vendidos': [{ img:'https://images.unsplash.com/photo-1543678577-3a30e977f0c8?q=80&w=600&auto=format&fit=crop', tag:'BEST SELLER', name:'Set deportivo urbano', price:'$58.00' }],
    'oferta': [{ img:'https://images.unsplash.com/photo-1543678577-3a30e977f0c8?q=80&w=600&auto=format&fit=crop', tag:'OFERTA', name:'Conjunto oversize urbano', price:'$49.00' }]
  },
  calzado: {
    'novedades': [{ img:'https://images.unsplash.com/photo-1634671494478-18ae96453241?q=80&w=600&auto=format&fit=crop', tag:'NUEVO', name:'Zapatillas urbanas', price:'$74.00' }],
    'coleccion-completa': [{ img:'https://images.unsplash.com/photo-1634671494478-18ae96453241?q=80&w=600&auto=format&fit=crop', tag:null, name:'Tenis clásicos', price:'$65.00' }],
    'mas-vendidos': [{ img:'https://images.unsplash.com/photo-1634671494478-18ae96453241?q=80&w=600&auto=format&fit=crop', tag:'BEST SELLER', name:'Zapatillas urbanas', price:'$74.00' }],
    'oferta': [{ img:'https://images.unsplash.com/photo-1634671494478-18ae96453241?q=80&w=600&auto=format&fit=crop', tag:'OFERTA', name:'Zapatillas urbanas', price:'$59.00' }]
  },
  accesorios: {
    'novedades': [{ img:'https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?q=80&w=600&auto=format&fit=crop', tag:'NUEVO', name:'Lentes de sol estructurados', price:'$38.00' }],
    'coleccion-completa': [{ img:'https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?q=80&w=600&auto=format&fit=crop', tag:null, name:'Lentes de sol estructurados', price:'$38.00' }],
    'mas-vendidos': [{ img:'https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?q=80&w=600&auto=format&fit=crop', tag:'BEST SELLER', name:'Lentes de sol estructurados', price:'$38.00' }],
    'oferta': [{ img:'https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?q=80&w=600&auto=format&fit=crop', tag:'OFERTA', name:'Lentes de sol estructurados', price:'$29.00' }]
  },
  maquillaje: {
    'novedades': [{ img:'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=600&auto=format&fit=crop', tag:'NUEVO', name:'Labial mate nude', price:'$19.00' }],
    'coleccion-completa': [{ img:'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=600&auto=format&fit=crop', tag:null, name:'Labial mate nude', price:'$19.00' }],
    'mas-vendidos': [{ img:'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=600&auto=format&fit=crop', tag:'BEST SELLER', name:'Labial mate nude', price:'$19.00' }],
    'oferta': [{ img:'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=600&auto=format&fit=crop', tag:'OFERTA', name:'Labial mate nude', price:'$14.00' }]
  },
  perfumes: {
    'novedades': [{ img:'https://images.unsplash.com/photo-1760920250029-36af9369a0bb?q=80&w=600&auto=format&fit=crop', tag:'NUEVO', name:'Perfume Essence No. 3', price:'$54.00' }],
    'coleccion-completa': [{ img:'https://images.unsplash.com/photo-1760920250029-36af9369a0bb?q=80&w=600&auto=format&fit=crop', tag:null, name:'Perfume Essence No. 3', price:'$54.00' }],
    'mas-vendidos': [{ img:'https://images.unsplash.com/photo-1760920250029-36af9369a0bb?q=80&w=600&auto=format&fit=crop', tag:'BEST SELLER', name:'Perfume Essence No. 3', price:'$54.00' }],
    'oferta': [{ img:'https://images.unsplash.com/photo-1760920250029-36af9369a0bb?q=80&w=600&auto=format&fit=crop', tag:'OFERTA', name:'Perfume Essence No. 3', price:'$44.00' }]
  }
};

export const catLabels = { ropa:'Ropa', calzado:'Calzado', accesorios:'Accesorios', maquillaje:'Maquillaje', perfumes:'Perfumes' };
export const subcats = ['Novedades','Colección completa','Más vendidos','Oferta'];

export const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
