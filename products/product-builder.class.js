import { Builder } from "../_helpers/builder.class"
import { Product } from "./product.class"

export class ProductBuilder extends Builder {
    /**
     *ID of the product 
     * @var string
     */
     id = ''
     /**
      * Name of the product
      * @var string
      * 
      */
     name =''
     /**
      * stock of the product
      * @var number
      * 
      */
     stock = 0
    
    /**
     * Build a concrete Product
     * Throw exceptions
     * @returns Product
     * @see Builder
     * @override
     */
    
    build() {
        if (this.id === '') {
            throw new TypeError(`Cannot build Product without an ID`)
        }

        if (this.name === '') {
            throw new TypeError(`Cannot build Product without a Name`)
        }

        if (isNaN(this.stock) || this.stock < 0) {
            throw new TypeError(`Stock cannot be negative and must be numeric`)
        }

        const product = Product.getInstance()
        product.id = this.id
        product.name = this.name
        product.stock = this.stock

        return product
    }
}