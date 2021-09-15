package co.com.sofka.CrudProducto.service;

import co.com.sofka.CrudProducto.entity.Product;
import co.com.sofka.CrudProducto.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ServiceProduct implements InterfaceService {

    @Autowired
    private ProductRepository data;

    @Override
    public Product save(Product product) {
        Product productAux = product;
        //if (productAux.getId() == null){
        // throw new NoSuchElementException("El id del producto no puede estar repe")
        //}
        if (data.exists(Example.of(productAux))) {
            throw new IllegalArgumentException("Ya existe el producto con el id" + product.getId());
        }
        return data.save(product);
    }

    @Override
    public List<Product> list() {
        return data.findAll();
    }

    @Override
    public Product listById(int id) {
        Optional<Product> productExists = data.findById(id);
        if (productExists.isEmpty()) {
            throw new NoSuchElementException("No existe el producto buscado con el id " + id);
        }
        return productExists.get();
    }

    @Override
    public void delete(int id) {
        Optional<Product> productExists = data.findById(id);
        if (productExists.isEmpty()) {
            throw new NoSuchElementException("No se encuentra el producto que quiere eliminar" + id);
        }
        data.deleteById(id);
    }

    @Override
    public Product update(Product product, int id) {
        Optional<Product> productExist = data.findById(id);
        if(productExist.isEmpty()){
            throw new NoSuchElementException("No se puede modificar el producto");
        }

        return data.save(product);
    }
}
