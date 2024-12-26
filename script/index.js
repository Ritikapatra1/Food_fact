const harmfulIngredients = [
    "Palm Oil", "Sodium Nitrite", "BHA", "MSG", "High Fructose Corn Syrup", "Emulsifiers (442",
    "Artificial Sweeteners", "Trans Fat", "Aspartame", "Butylated HydroxyToluene (BHT)", 
    "High Fructose Corn Syrup (HFCS)", "Potassium Bromate", "Sodium Benzoate", "Sugar (5%)", "Palmolein",
    "Acesulfame K", "Artificial Colorants", "Parabens", "Propyl Gallate", "Edible vegetable oil (palmolein oil)",
    "Nitrates", "Benzene", "Hydrogenated Oils", "Phosphates", "Artificial Flavors", "Colour (150c)",
    "Sodium Saccharin", "Erythritol", "Cyclamate", "Titanium Dioxide", "Olestra", "Edible vegetable oil (palm",
    "Propylene Glycol", "Monosodium Glutamate (MSG)", "Polysorbate 80", "Colour (150d)", "Flavour enhancers (627 & 631)",
    "Yellow 5", "Yellow 6", "Red 40", "Blue 1", "Blue 2", "Butylated HydroxyAnisole (BHA)", "*seasoning (sugar",
    "Hydrogenated Vegetable Fat", "Flavour Enhancer (INS 635, 627, 631)", "Preservatives (202, 281, INS 211)",
    "Thickener (INS 508, 412)", "Stabilizers (INS 451, 440, 406, 407, 415, 401, 461)", "Liquid Glucose", "Refined Palmolein", 
    "Refined Sugar", "Emulsifier(442, 476)", "Permitted Natural Colour (150d)", "Preservative (INS 211, INS 202, INS 281)", 
    "Antioxident (INS 319)", "Acid Regulators (INS 338, 330, 296, 331, 501, 334)", "Raising Agents (500, 503)",
    "Humectants (INS 420, INS 422, 451)", "Anticaking agent (ins 551)]", "Carbonating Agent (INS 290)", "Fractionated Fat",
    "Invert Sugar", "Thickeners(508 & 412)", "501(i) & 500(i))", "Color(150d)", "& palm oil)", "Anticaking agent (551)",
    "Flavour enhancer(635) and mineral ( ferric pyrophosphate)", "Hydrolyzed vegetable protein", "Flavour enhancers (ins 627",
    "Anticaking agent (ins 551)", "Acid: phosphoric acid", "Flavour caffeine", "Caffeine", "Refined palm oil", "Thickener (ins 508)",
    "Stabilizer (ins 451)", " antioxidant (ins 319).", "Flavour enhancer (ins 635))", "Anticaking agent (ins 551) sunflower oil",
    "Natural colour (ins 150d)", "Edible vegetable oil (palmolein oil", "Preservative (ins 211)", "Choco covering(25%) [sugar",
    "Hydrogenated vegetable fat (palm)", "Artificial flavour (vanilla)]", "Liquid glucose interesterified & hydrogenated vegetable fat (palm)",
    "Thickeners (508 & 412)", "Thickener (508)", "Flavour enhancer (635)", "Wheat glute liquid glucose", "Milk chocolate (50%)- sugar",
    "Biscuit 13% (refined wheat flour (maida)", "Leavening agents (500)", "Emulsifier (442)",
];
const neutralIngredients = [
    "Citric Acid", "Xanthan Gum", "Maltodextrin", "Natural Flavors", "Milk solids emulsifiers (322", "Stabilizers (407", "406",
    "Lecithin", "Carrageenan", "Calcium Propionate", "Monosodium Glutamate (MSG)", "476)", "422)", "440", "wheat(gluten)",
    "Sodium Citrate", "Sodium Bicarbonate", "Ascorbic Acid", "Tartaric Acid", "Humectants (420", "401", "415)", "Milk solids (13%)",
    "Sucralose", "Pectin", "Gellan Gum", "Guar Gum", "Gelatin", "Sodium Alginate", "Raising agents [500(ii)", "Stabilizer (471).",
    "Magnesium Stearate", "Calcium Carbonate", "Calcium Sulfate", "Silicon Dioxide", "503)]", "Iodised salt", "471)", "Iodized salt",
    "Gum Arabic", "Sodium Lauryl Sulfate", "Lactic Acid", "Sodium Stearoyl Lactylate", "Preservatives (202", "281)", "Wheat)",
    "Tocopherols", "Stevia Extract", "Fumaric Acid", "Sodium Gluconate", "Common salt (Iodised Salt)", "461", "Hydrolysed vegetable protein",
    "Sugar", "Carbon Dioxide", "Refined Wheat Flour (Maida)", "Edible Vegetable oil (Palmolein, Sunflower Oil, Rice Bran Oil",
    "Yeast Extract", "Dextrose", "Cocoa Solids", "Spices & Condiments", "Permitted Stabilizer (E460)", "Tomato Powder (Tomato Paste)", 
    "Natural flavourings", "colour (E150d)", "Corn Flour", "Soy Sauce powder (Soybean, Wheat, Salt)", "Acidity Regulators (260, 500)", 
    "Caramel salt mix (salt, Colour)", "Starch", "Wheat Gluten", "Seasoning Mix (refined Palmolien + Spices)", "Milk Chocolate(50%)",
    "Mineral (Calcium Carbonate)", "Salt", "Noodles : refined wheat flour", "Mineral(calcium carbonate) and humectant(451(i)) taste maker : hydrolyzed peanut protein",
    "Mixed spices(23.6%)", "Noodle powder ( refined wheat flour ", "Acid regulators(170(i)", "Humectant(451(i))", "Guar gum)", 
    "Acidity regulators(330 & 500(ii))", "Noodle powder ( refined wheat flour", "Caramel salt mix (salt", "Seasoning mix (refined palmolein spices & condiments",
    "1odised salt", "Acidity regulators (ins 296", "Ins 330", "Ins 334)", "Tomato powder [tomato paste", "Ins 631) and antioxidant",
    "Common salt. contains permitted natural colour [annatto]", "Colour e150d", "Carbonated water", "Acidity regulator (338)", "Added flavour", 
    "Common salt", "Spices & condiments (1%)", "Permitted stabilizer (e 460(i)).", "Soy sauce powder (soybean", "Peanut)",
    "*concentrated orange juice 19.7% contains added flavour (natural orange flavouring substances) *reconstituted 100%orange juice",
    "Noodles: refined wheat flour (maida)", "Lodised salt", "Acidity regulator (ins 501 (i))", "Raising agent (ins 500(i)).", "Wheat",
    "Salt)", "Acidity regulator (ins 260))", "Natural flavouring substances. allergen advice: contains wheat and soy. may contain mustard", 
    "Salt (1%).", "Wheat semolina) (65%)", "Flavourings (contain celery)", "Chicken fat (2", "5%)", "Potassium chloride", "Ascorbyl palmitate)",
    "May contain milk", "Ins 331", "Acidity regulator (341(i)] and artificial flavour (milk).", "Milk & soya polyols may have laxative effects",
    "Lodized salt", "Acidity regulators (501(i) & 500 (i)) and humectant (451 (i)). masala *tastemaker®: mixed spices (25.6%) (onion powder",
    "Hydrolysed groundnut protein", "Acidity regulator (330)", "Mineral and wheat gluten. allergen note: contains wheat & nut. may contain milk",
    "Flavour (natural and nature identical flavouring substances)", "spices & condiments", "Lactose).as flavouring agent.contains onion and garlic",
    "Cereal extract 56% (barley", "Emulsifiers (322", "Vitamins raising agent (500)", "Flavours (natural", "Flavours (natural", "Emulsifier (322)",
    "Nature identical and artificial (vanilla) flavouring substances)", "Nature identical and artificial (vanilla) flavouring substances) centre (50%)- fractionated fat",
    "Flavours (artificial (vanilla) flavouring substances)", "Lactose-rich deproteinized whey permeate powder",
    "Flavours (artificial (vanilla) flavouring substances).", 
];
const healthyIngredients = [
    "Honey (100%)", "Olive Oil", "Chia Seeds", "Green Tea", "Coconut Oil", "Garlic", 
    "Whole Wheat", "Almonds", "Spinach", "Avocados", "Flaxseeds", "Turmeric", "Turmeric Powder",
    "Ginger", "Berries", "Kale", "Salmon", "Oats", "Greek Yogurt", "Sweet Potatoes", 
    "Quinoa", "Lemon", "Apple Cider Vinegar", "Walnuts", "Cabbage", "Broccoli", "Lodized salt ",
    "Carrots", "Cucumber", "Tomatoes", "Lentils", "Chickpeas", "Cinnamon", "Cacao", "Millets",
    "Blueberries", "Strawberries", "Cabbage", "Mangoes", "Pineapple", "Papaya", "Toasted onion flakes",
    "Dark Chocolate", "Beets", "Artichokes", "Pumpkin Seeds", "Sesame Seeds", "Pomegranate", 
    "Coconut Water", "Tomato Sauce", "Lemon Balm", "Watermelon", "Acerola Cherry", "Oats and soy",
    "Acai Berries", "Kiwi", "Raspberries", "Tuna", "Cabbage", "Pistachios", "Hemp Seeds", "Minerals",
    "Mushrooms", "Zucchini", "Brussels Sprouts", "Miso", "Cauliflower", "Edamame", "Apricots", "Coco solids",
    "Paprika", "Fennel", "Chard", "Mustard Greens","Water", "Concentrated orange Juice", "Mustard", "Sunflower",
    "Milk Solids", "Potato", "Natural colour (Annatto)", "Garlic Powder", "Black Salt", "Rice grits", "Corn Grits",
    "Onion", "Dehydrated Garlic", "Dehydrated Onion", "Butter", "Potato Starch", "Pasta (durum wheat semolina",
    "Natural Flavouring Subtances", "Alpha-Tocopherol (Vitamin E)", "Rosemary Extracts", "Whole Wheat Flour", "Cumin Powder", 
    "Nutmeg Powder", "Dehydrated Vegetables (Carrot, Onion)", "Chicken (3%)","Black pepper powder", "Fenugreek Powder", 
    "Ginger Powder", "Coriander powder", "Red chili powder (3%)", "Dried garlic (2.5%)", "Dried garlic (2.5%)", "Roasted peanut (91%)",
    "Black pepper powder (0.4%)", "Clove powder(0.1%)", "Green cardamom powder(0.1%)", "Aniseed powder", "Onion (1.8%)",
    " seasoning mix: mixed spices (22.6%) [coriander", "Cumin", "Chilli", "Ginger]", "Dehydrated vegetables (7.5%) [carrot", "Parsley]",
    "Milk & celery", "Rice bran oil)", "Chicken (3% )", "Toasted onion powder", "Spices (celery seeds", "Pepper)", "Parsley",
    "Antioxidants (extracts of rosemary", "Alpha-tocopherol", "Egg and mustard", "Ins 300)", "Stabilizer (ins 440)", "Cocoa butter",
    "Antioxidant (ins 300)", "Red chilli powder", "Clove powder", "Green cardamom powder & nutmeg powder)", "Edible vegetable oil (groundnut oil)",
    "Cocos solids", "5030)) lodised salt", 

];

function fetchProductData() {
    const barcode = document.getElementById('barcode').value.trim();
    if (!barcode) {
        alert('Please enter a valid barcode number.');
        return;
    }

    fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayProductData(data))
        .catch(error => {
            console.error('Error fetching product data:', error);
            document.getElementById('product-info').innerHTML = `<p class="error">An error occurred while fetching product data. Please try again later.</p>`;
        });
}

function displayProductData(data) {
    const productInfoDiv = document.getElementById('product-info');
    const ingredientsText = data.product.ingredients_text || '';
    const { harmful, neutral, healthy, uncategorized } = categorizeIngredients(ingredientsText);
    productInfoDiv.innerHTML = ''; // Clear previous results

    if (data.status === 1) {
        const product = data.product;
        let productInfoHtml = `
            <h3>${product.product_name || 'N/A'}</h3>
            <p><strong>Brand:</strong> ${product.brands || 'N/A'}</p>
            <p><strong>Quantity:</strong> ${product.quantity || 'N/A'}</p>
            <p><strong>Packaging:</strong> ${product.packaging || 'N/A'}</p>
            <p><strong>Ingredients:</strong></p>
            <h4>Harmful Ingredients</h4>
            <ul class="harmful-ingredients">${harmful.join('')}</ul>
            <h4>Neutral Ingredients</h4>
            <ul class="neutral-ingredients">${neutral.join('')}</ul>
            <h4>Healthy Ingredients</h4>
            <ul class="healthy-ingredients">${healthy.join('')}</ul>
            <h4>Uncategorized Ingredients</h4>
            <ul class="uncategorized-ingredients">${uncategorized.join('')}</ul>
            <p><strong>Categories:</strong> ${product.categories || 'N/A'}</p>
            <p><strong>Labels:</strong> ${product.labels || 'N/A'}</p>
            <p><strong>Origins:</strong> ${product.origins || 'N/A'}</p>
            <p><strong>Manufacturing Places:</strong> ${product.manufacturing_places || 'N/A'}</p>
            <p><strong>Stores:</strong> ${product.stores || 'N/A'}</p>
            <p><strong>Countries:</strong> ${product.countries || 'N/A'}</p>
            <p><strong>Nutritional Information:</strong></p>
            <ul>
                <li><strong>Energy:</strong> ${product.nutriments?.energy || 'N/A'} kJ</li>
                <li><strong>Fat:</strong> ${product.nutriments?.fat || 'N/A'} g</li>
                <li><strong>Saturated Fat:</strong> ${product.nutriments?.['saturated-fat'] || 'N/A'} g</li>
                <li><strong>Carbohydrates:</strong> ${product.nutriments?.carbohydrates || 'N/A'} g</li>
                <li><strong>Sugars:</strong> ${product.nutriments?.sugars || 'N/A'} g</li>
                <li><strong>Proteins:</strong> ${product.nutriments?.proteins || 'N/A'} g</li>
                <li><strong>Salt:</strong> ${product.nutriments?.salt || 'N/A'} g</li>
                <li><strong>Fiber:</strong> ${product.nutriments?.fiber || 'N/A'} g</li>
            </ul>
            ${product.image_url ? `<img src="${product.image_url}" alt="${product.product_name || 'Product Image'}" loading="lazy">` : ''}
        `;
        productInfoDiv.innerHTML = productInfoHtml;
    } else {
        productInfoDiv.innerHTML = `<p class="error">Product not found. Please check the barcode and try again.</p>`;
    }
}

function categorizeIngredients(ingredientsText) {
    const ingredientsArray = ingredientsText.split(',').map(ing => ing.trim().toLowerCase());
    const harmful = [];
    const neutral = [];
    const healthy = [];
    const uncategorized = [];

    ingredientsArray.forEach(ingredient => {
        const formattedIngredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        if (harmfulIngredients.map(h => h.toLowerCase()).includes(ingredient)) {
            harmful.push(`<li>${formattedIngredient} (Harmful)</li>`);
        } else if (neutralIngredients.map(n => n.toLowerCase()).includes(ingredient)) {
            neutral.push(`<li>${formattedIngredient} (Neutral)</li>`);
        } else if (healthyIngredients.map(h => h.toLowerCase()).includes(ingredient)) {
            healthy.push(`<li>${formattedIngredient} (Healthy)</li>`);
        } else {
            uncategorized.push(`<li>${formattedIngredient} (Uncategorized)</li>`);
        }
    });

    return { harmful, neutral, healthy, uncategorized };
}

function startScanner() {
    const scannerElement = document.querySelector('#scanner');
    scannerElement.innerHTML = ''; // Clear scanner container

    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: scannerElement,
            constraints: {
                facingMode: "environment",
                width: { ideal: 300 },
                height: { ideal: 330 }
            }
        },
        decoder: {
            readers: ["ean_reader", "upc_reader"]
        }
    }, function(err) {
        if (err) {
            console.error('Scanner initialization failed:', err);
            scannerElement.innerHTML = '<p class="error">Scanner initialization failed. Please try again later.</p>';
            return;
        }
        Quagga.start();
    });

    Quagga.onDetected(function(result) {
        const code = result.codeResult.code;
        document.getElementById('barcode').value = code;
        fetchProductData();
        Quagga.stop();
    });
}
