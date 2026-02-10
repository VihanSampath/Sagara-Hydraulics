const products = [
    {
        id: 1,
        name: "Double Acting Hydraulic Cylinder",
        category: "cylinders",
        description: "Heavy-duty double acting cylinder for construction machinery and industrial applications.",
        image: "./assets/images/products/cylinder-1.jpg",
        specs: {
            "Bore Size": "40mm - 200mm",
            "Stroke": "Up to 2000mm",
            "Max Pressure": "250 Bar"
        },
        applications: ["Construction", "Mining"]
    },
    {
        id: 2,
        name: "Telescopic Cylinder",
        category: "cylinders",
        description: "Multi-stage telescopic cylinder for dump trucks and mobile cranes.",
        image: "./assets/images/products/cylinder-2.jpg",
        specs: {
            "Stages": "2 - 5 Stages",
            "Stroke": "Up to 5000mm",
            "Type": "Single Acting"
        },
        applications: ["Mobile Machines", "Transport"]
    },
    {
        id: 3,
        name: "Compact Pneumatic Cylinder",
        category: "cylinders",
        description: "Space-saving design for automation and clamping applications.",
        image: "./assets/images/products/cylinder-3.jpg",
        specs: {
            "Bore": "16mm - 100mm",
            "Mounting": "ISO Standard",
            "Material": "Aluminum"
        },
        applications: ["Automation", "Manufacturing"]
    },
    {
        id: 4,
        name: "Tie-Rod Cylinder",
        category: "cylinders",
        description: "Standard industrial tie-rod cylinder compliant with ISO 6020/2.",
        image: "./assets/images/products/cylinder-4.jpg",
        specs: {
            "pressure": "160 Bar",
            "Seals": "Polyurethane",
            "Mounting": "Various Options"
        },
        applications: ["Industrial", "Machine Tools"]
    },
    {
        id: 5,
        name: "Gear Pump Series G",
        category: "pumps",
        description: "High-efficiency external gear pump for hydraulic power packs.",
        image: "./assets/images/products/pump-1.jpg",
        specs: {
            "Displacement": "1.2 - 87 cc/rev",
            "Max Speed": "3000 RPM",
            "Body": "Aluminum"
        },
        applications: ["Power Units", "Agricultural"]
    },
    {
        id: 6,
        name: "Variable Piston Pump",
        category: "pumps",
        description: "Axial piston pump with load sensing control for mobile machinery.",
        image: "./assets/images/products/pump-2.jpg",
        specs: {
            "Control": "Load Sensing / Pressure Comp.",
            "Pressure": "350 Bar",
            "Flow": "Variable"
        },
        applications: ["Excavators", "Cranes"]
    },
    {
        id: 7,
        name: "Vane Pump Low Noise",
        category: "pumps",
        description: "Low noise intra-vane pump for industrial molding machines.",
        image: "./assets/images/products/pump-3.jpg",
        specs: {
            "Noise Level": "< 70 dB",
            "Cartridge": "Replaceable",
            "Mounting": "SAE Flange"
        },
        applications: ["Plastic Molding", "Presses"]
    },
    {
        id: 8,
        name: "Hand Pump",
        category: "pumps",
        description: "Manual hydraulic pump for emergency backup and testing.",
        image: "./assets/images/products/pump-4.jpg",
        specs: {
            "Pressure": "Up to 700 Bar",
            "Tank": "Integrated 1L - 5L",
            "Type": "Single/Double Speed"
        },
        applications: ["Maintenance", "Jacking"]
    },
    {
        id: 9,
        name: "Directional Control Valve",
        category: "valves",
        description: "Solenoid operated 4/3 way valve for system control.",
        image: "./assets/images/products/valve-1.jpg",
        specs: {
            "Voltage": "12V / 24V / 220V",
            "Max Flow": "80 LPM",
            "Size": "CETOP 3 / NG6"
        },
        applications: ["Automation", "Power Packs"]
    },
    {
        id: 10,
        name: "Relief Valve",
        category: "valves",
        description: "Pilot operated pressure relief valve for system protection.",
        image: "./assets/images/products/valve-2.jpg",
        specs: {
            "Setting": "Adjustable 50-315 Bar",
            "Mounting": "Subplate / Line",
            "Response": "Fast Acting"
        },
        applications: ["Safety", "Control"]
    },
    {
        id: 11,
        name: "Monoblock Valve",
        category: "valves",
        description: "Manual lever monoblock valve for mobile equipment.",
        image: "./assets/images/products/valve-3.jpg",
        specs: {
            "Spools": "1 - 6 Banks",
            "Flow": "40 LPM",
            "Features": "Built-in Relief"
        },
        applications: ["Tractors", "Loaders"]
    },
    {
        id: 12,
        name: "Check Valve",
        category: "valves",
        description: "Inline non-return valve to prevent backflow.",
        image: "./assets/images/products/valve-4.jpg",
        specs: {
            "Cracking Pressure": "0.5 Bar",
            "Flow": "Up to 200 LPM",
            "Material": "Steel / Brass"
        },
        applications: ["General Hydraulic", "Safety"]
    },
    {
        id: 13,
        name: "High Pressure Hose",
        category: "hoses",
        description: "2SN/4SP wire braided hydraulic hose for high pressure lines.",
        image: "./assets/images/products/hose-1.jpg",
        specs: {
            "rating": "SAE 100 R2",
            "Temp": "-40C to +100C",
            "Size": "1/4\" - 2\""
        },
        applications: ["Mobile", "Industrial"]
    },
    {
        id: 14,
        name: "Hydraulic Fittings Kit",
        category: "hoses",
        description: "Assorted BSP, JIC, and ORFS fittings and adapters.",
        image: "./assets/images/products/hose-2.jpg",
        specs: {
            "Material": "Carbon Steel / Stainless",
            "Plating": "Zinc Nickel",
            "Types": "Straight, 90, 45"
        },
        applications: ["Maintenance", "Assembly"]
    },
    {
        id: 15,
        name: "Quick Couplers",
        category: "hoses",
        description: "Flat face quick release couplings for skid steers and attachments.",
        image: "./assets/images/products/hose-3.jpg",
        specs: {
            "Standard": "ISO 16028",
            "Pressure": "350 Bar",
            "Feature": "Non-Spill"
        },
        applications: ["Construction Attachments", "Mobile"]
    },
    {
        id: 16,
        name: "Crimping Machine",
        category: "hoses",
        description: "Portable hose crimping machine for field repairs.",
        image: "./assets/images/products/hose-4.jpg",
        specs: {
            "Capacity": "Up to 1-1/4\" 4SP",
            "Operation": "Hand Pump / Air",
            "Weight": "25kg"
        },
        applications: ["Field Service", "Workshops"]
    }
];

// Helper to format currency (if needed, currently not used)
const formatPrice = (price) => {
    return 'Rs. ' + price.toLocaleString();
};

// Get product by ID
const getProductById = (id) => {
    return products.find(p => p.id === parseInt(id));
};

// Filter products
const filterProducts = (criteria) => {
    return products.filter(product => {
        let match = true;

        if (criteria.category && criteria.category !== 'all') {
            if (product.category !== criteria.category) match = false;
        }

        if (criteria.search) {
            const term = criteria.search.toLowerCase();
            if (!product.name.toLowerCase().includes(term) &&
                !product.description.toLowerCase().includes(term)) match = false;
        }

        return match;
    });
};
