import React from "react";
import Image from "next/image";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center bg-[hsl(30,54%,90%)] py-20">
            <div className="flex flex-col justify-center bg-[hsl(0,0%,100%)] p-6 rounded-lg gap-[12px] max-w-[500px]">
                <Image src="/images/03/image-omelette.jpeg" alt="recipe" width={500} height={100} className="rounded-lg" />
                <span className="text-[hsl(24,5%,18%)] text-xl font-bold">
                    Simple Omelette Recipe
                </span>
                <span className="text-[hsl(30,10%,34%)] text-[12px]">
                    An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </span>
                <div className="flex flex-col gap-[12px] bg-[hsl(330,100%,98%)] p-6 rounded-lg">
                    <span className="text-[hsl(332,51%,32%)] text-[14px] font-bold">
                        Preparation time
                    </span>
                    
                    <ul className="space-y-2">
                        <li className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                            <span className="w-1 h-1 bg-[hsl(332,51%,32%)] rounded-full"></span>
                            <span className="ml-5"><strong>Total:</strong> Approximately 10 minutes</span>
                        </li>
                        <li className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                            <span className="w-1 h-1 bg-[hsl(332,51%,32%)] rounded-full"></span>
                            <span className="ml-5"><strong>Preparation:</strong> 5 minutes</span>
                        </li>
                        <li className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                            <span className="w-1 h-1 bg-[hsl(332,51%,32%)] rounded-full"></span>
                            <span className="ml-5"><strong>Cooking:</strong> 5 minutes</span>
                        </li>
                    </ul>
                </div>
                <span className="text-[hsl(14,45%,36%)] text-xl font-bold">
                    Ingredients
                </span>
                <div className="border-b border-[hsl(30,18%,87%)] pb-6 flex flex-col gap-[12px]">
                    <div className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                        <span className="w-1 h-1 bg-[hsl(14,45%,36%)] rounded-full"></span>
                        <span className="ml-5">2-3 large eggs</span>
                    </div>
                    <div className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                        <span className="w-1 h-1 bg-[hsl(14,45%,36%)] rounded-full"></span>
                        <span className="ml-5">Salt, to taste</span>
                    </div>
                    <div className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                        <span className="w-1 h-1 bg-[hsl(14,45%,36%)] rounded-full"></span>
                        <span className="ml-5">Pepper, to taste</span>
                    </div>
                    <div className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                        <span className="w-1 h-1 bg-[hsl(14,45%,36%)] rounded-full"></span>
                        <span className="ml-5">1 tablespoon of butter or oil</span>
                    </div>
                    <div className="flex items-center text-[14px] text-[hsl(30,10%,34%)]">
                        <span className="w-1 h-1 bg-[hsl(14,45%,36%)] rounded-full"></span>
                        <span className="ml-5">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px] border-b border-[hsl(30,18%,87%)] pb-6">
                    <span className="text-[hsl(14,45%,36%)] text-xl font-bold">
                        Instructions
                    </span>
                    <ol className="list-decimal list-inside text-[hsl(14,45%,36%)] text-[14px] gap-[12px] flex flex-col">
                        <li>
                            <span className="text-[hsl(30,10%,34%)] text-[14px]">
                                <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                            </span>
                        </li>
                        <li>
                            <span className="text-[hsl(30,10%,34%)] text-[14px]">
                                <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
                            </span>
                        </li>
                        <li>
                            <span className="text-[hsl(30,10%,34%)] text-[14px]">
                                <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                            </span>
                        </li>
                        <li>
                            <span className="text-[hsl(30,10%,34%)] text-[14px]">
                                <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                            </span>
                        </li>
                        <li>
                            <span className="text-[hsl(30,10%,34%)] text-[14px]">
                                <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                            </span>
                        </li>
                        <li>
                            <span className="text-[hsl(30,10%,34%)] text-[14px]">
                                <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
                            </span>
                        </li>

                    </ol>

                </div>

                <div className="flex flex-col gap-[12px]">
                    <span className="text-[hsl(14,45%,36%)] text-xl font-bold">
                        Nutrition
                    </span>
                    <span className="text-[hsl(30,10%,34%)] text-[14px]">
                        The table below shows nutritional values per serving without the additional fillings.
                    </span>
                    <div className="px-6">
                        <table className="w-full text-[14px] h-[150px]">
                            <tbody>
                                <tr className="border-b border-[hsl(30,18%,87%)]">
                                    <td className="text-[hsl(30,10%,34%)]">Calories</td>
                                    <td className="text-[hsl(14,45%,36%)] font-bold">277kcal</td>
                                </tr>
                                <tr className="border-b border-[hsl(30,18%,87%)]">
                                    <td className="text-[hsl(30,10%,34%)]">Carbs</td>
                                    <td className="text-[hsl(14,45%,36%)] font-bold">0g</td>
                                </tr>
                                <tr className="border-b border-[hsl(30,18%,87%)]">
                                    <td className="text-[hsl(30,10%,34%)]">Protein</td>
                                    <td className="text-[hsl(14,45%,36%)] font-bold">20g</td>
                                </tr>
                                <tr className="border-b border-[hsl(30,18%,87%)]">
                                    <td className="text-[hsl(30,10%,34%)]">Fat</td>
                                    <td className="text-[hsl(14,45%,36%)] font-bold">22g</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}
