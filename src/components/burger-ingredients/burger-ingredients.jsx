import React from "react";
import {data} from "../api";
import {TabIngredients} from "../tab-ingredients/tab-ingredients";
import {IngredientsCard} from "../ingredients-card/ingredients-card";
import styles from "./burger-ingredients.module.css";

export const BurgerIngredients = () => {
    const buns = data.filter(item => item.type === 'bun').map(item => {
        return IngredientsCard(item)
    });
    const mains = data.filter(item => item.type === 'main').map(item => {
        return IngredientsCard(item)
    });
    const sauces = data.filter(item => item.type === 'sauce').map(item => {
        return IngredientsCard(item)
    });

    return (
        <section className={`${styles.main} mr-10`}>
            <p className="text text-position text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <TabIngredients/>
            <div className={styles.ingredients_scroll}>
                <div className={`${styles.ingredients_menu} mt-10 mb-10`}>
                    <h3 className={`${styles.text_position} text text_type_main-medium`} id="buns">
                        Булки
                    </h3>
                    <div className={`${styles.buns} mt-6 ml-4 mr-4`}>{buns}</div>
                    <h3 className={`${styles.text_position} text text_type_main-medium mt-10`} id="sauces">
                        Соусы
                    </h3>
                    <div className={`${styles.buns} mt-6 ml-4 mr-4`}>{sauces}</div>
                    <h3 className={`${styles.text_position} text text_type_main-medium mt-10`} id="mains">
                        Начинки
                    </h3>
                    <div className={`${styles.buns} mt-6 ml-4 mr-4`}>{mains}</div>
                </div>
            </div>
        </section>
    )
}