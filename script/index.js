const harmfulIngredients = [
    "Palm Oil", "Sodium Nitrite", "BHA", "MSG", "High Fructose Corn Syrup", 
    "Artificial Sweeteners", "Trans Fat", "Aspartame", "Butylated HydroxyToluene (BHT)", 
    "High Fructose Corn Syrup (HFCS)", "Potassium Bromate", "Sodium Benzoate", 
    "Acesulfame K", "Artificial Colorants", "Parabens", "Propyl Gallate", 
    "Nitrates", "Benzene", "Hydrogenated Oils", "Phosphates", "Artificial Flavors",
    "Sodium Saccharin", "Erythritol", "Cyclamate", "Titanium Dioxide", "Olestra", 
    "Propylene Glycol", "Monosodium Glutamate (MSG)", "Polysorbate 80", 
    "Yellow 5", "Yellow 6", "Red 40", "Blue 1", "Blue 2", "Butylated HydroxyAnisole (BHA)"
];
const neutralIngredients = [
    "Citric Acid", "Xanthan Gum", "Maltodextrin", "Natural Flavors", 
    "Lecithin", "Carrageenan", "Calcium Propionate", "Monosodium Glutamate (MSG)", 
    "Sodium Citrate", "Sodium Bicarbonate", "Ascorbic Acid", "Tartaric Acid", 
    "Sucralose", "Pectin", "Gellan Gum", "Guar Gum", "Gelatin", "Sodium Alginate", 
    "Magnesium Stearate", "Calcium Carbonate", "Calcium Sulfate", "Silicon Dioxide", 
    "Gum Arabic", "Sodium Lauryl Sulfate", "Lactic Acid", "Sodium Stearoyl Lactylate", 
    "Tocopherols", "Stevia Extract", "Fumaric Acid", "Sodium Gluconate"
];
const healthyIngredients = [
    "Honey", "Olive Oil", "Chia Seeds", "Green Tea", "Coconut Oil", "Garlic", 
    "Whole Wheat", "Almonds", "Spinach", "Avocados", "Flaxseeds", "Turmeric", 
    "Ginger", "Berries", "Kale", "Salmon", "Oats", "Greek Yogurt", "Sweet Potatoes", 
    "Quinoa", "Lemon", "Apple Cider Vinegar", "Walnuts", "Cabbage", "Broccoli", 
    "Carrots", "Cucumber", "Tomatoes", "Lentils", "Chickpeas", "Cinnamon", "Cacao", 
    "Blueberries", "Strawberries", "Cabbage", "Mangoes", "Pineapple", "Papaya", 
    "Dark Chocolate", "Beets", "Artichokes", "Pumpkin Seeds", "Sesame Seeds", "Pomegranate", 
    "Coconut Water", "Tomato Sauce", "Lemon Balm", "Watermelon", "Acerola Cherry", 
    "Acai Berries", "Kiwi", "Raspberries", "Tuna", "Cabbage", "Pistachios", "Hemp Seeds", 
    "Mushrooms", "Zucchini", "Brussels Sprouts", "Miso", "Cauliflower", "Edamame", "Apricots", 
    "Paprika", "Fennel", "Chard", "Mustard Greens"
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
