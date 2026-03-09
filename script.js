// Sidebar navigation
function showSection(id, event) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
    if(event) event.target.classList.add('active');

    if(id === 'dosage'){
        displayDosageList();
    }
}
// Sample medicine data
const medicines = [
   {
        name: "Paracetamol",
        salts: "Acetaminophen",
        working: "Inhibits prostaglandin synthesis in the CNS, reducing fever and pain.",
        function: "Analgesic and antipyretic."
    },
    {
        name: "Amoxicillin",
        salts: "Amoxicillin trihydrate",
        working: "Inhibits bacterial cell wall synthesis, leading to bacterial death.",
        function: "Used to treat bacterial infections."
    },
    {
        name: "Aspirin",
        salts: "Acetylsalicylic Acid",
        working: "Irreversibly inhibits COX enzymes, reducing formation of prostaglandins.",
        function: "Pain relief, anti-inflammatory, prevents blood clots."
    },
    {
        name: "Metformin",
        salts: "Metformin Hydrochloride",
        working: "Decreases hepatic glucose production and improves insulin sensitivity.",
        function: "Used to control blood sugar in type 2 diabetes."
    },
    {
        name: "Ibuprofen",
        salts: "Ibuprofen",
        working: "Non-selective COX inhibitor, reducing prostaglandin production.",
        function: "Pain relief, anti-inflammatory, reduces fever."
    },
    {
        name: "Ciprofloxacin",
        salts: "Ciprofloxacin Hydrochloride",
        working: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing replication.",
        function: "Treats bacterial infections, especially urinary tract infections."
    },
    {
        name: "Omeprazole",
        salts: "Omeprazole Magnesium",
        working: "Inhibits gastric proton pump, reducing stomach acid production.",
        function: "Treats GERD, ulcers, and acid reflux."
    },
    {
        name: "Cetirizine",
        salts: "Cetirizine Hydrochloride",
        working: "Selective H1 receptor antagonist, reducing allergic response.",
        function: "Used for allergies, hay fever, and urticaria."
    },
    {
        name: "Salbutamol",
        salts: "Albuterol",
        working: "Beta-2 adrenergic agonist, relaxes bronchial smooth muscles.",
        function: "Relieves bronchospasm in asthma and COPD."
    },
    {
        name: "Atorvastatin",
        salts: "Atorvastatin Calcium",
        working: "Inhibits HMG-CoA reductase, reducing cholesterol synthesis.",
        function: "Used to lower cholesterol and prevent cardiovascular diseases."
    },
    {
        name: "Losartan",
        salts: "Losartan Potassium",
        working: "Blocks angiotensin II receptors, reducing blood pressure.",
        function: "Used to treat hypertension and protect kidneys in diabetes."
    },
    {
        name: "Levothyroxine",
        salts: "Levothyroxine Sodium",
        working: "Synthetic thyroid hormone, replaces or supplements endogenous thyroxine.",
        function: "Used to treat hypothyroidism."
    },
    {
        name: "Clopidogrel",
        salts: "Clopidogrel Bisulfate",
        working: "Inhibits ADP-mediated platelet aggregation.",
        function: "Prevents blood clots, reduces risk of heart attack and stroke."
    },
    {
        name: "Ranitidine",
        salts: "Ranitidine Hydrochloride",
        working: "H2 receptor antagonist, reduces gastric acid secretion.",
        function: "Treats ulcers, GERD, and Zollinger-Ellison syndrome."
    },
    {
        name: "Doxycycline",
        salts: "Doxycycline Hyclate",
        working: "Inhibits bacterial protein synthesis by binding to 30S ribosomal subunit.",
        function: "Used to treat bacterial infections, acne, and malaria prophylaxis."
    },
    {
        name: "Prednisone",
        salts: "Prednisone",
        working: "Suppresses inflammation and immune response by acting on glucocorticoid receptors.",
        function: "Used for allergies, asthma, autoimmune diseases, and inflammation."
    },
    {
        name: "Furosemide",
        salts: "Furosemide",
        working: "Inhibits sodium and chloride reabsorption in the kidneys, promoting diuresis.",
        function: "Treats edema and hypertension."
    },
    {
        name: "Hydrochlorothiazide",
        salts: "Hydrochlorothiazide",
        working: "Inhibits sodium reabsorption in the distal tubules, increasing urine output.",
        function: "Used to manage hypertension and edema."
    },
    {
        name: "Simvastatin",
        salts: "Simvastatin",
        working: "Inhibits HMG-CoA reductase, reducing cholesterol synthesis in the liver.",
        function: "Lowers cholesterol and reduces risk of cardiovascular disease."
    },
    {
        name: "Clarithromycin",
        salts: "Clarithromycin",
        working: "Inhibits bacterial protein synthesis by binding to 50S ribosomal subunit.",
        function: "Used to treat respiratory tract infections, skin infections, and H. pylori."
    },
    {
        name: "Gabapentin",
        salts: "Gabapentin",
        working: "Modulates calcium channels in the CNS to reduce nerve excitability.",
        function: "Used to treat neuropathic pain and seizures."
    },
    {
        name: "Diazepam",
        salts: "Diazepam",
        working: "Enhances GABA activity in CNS, producing sedative and anxiolytic effects.",
        function: "Used for anxiety, muscle spasms, and seizures."
    },
    {
        name: "Montelukast",
        salts: "Montelukast Sodium",
        working: "Blocks leukotriene receptors, reducing airway inflammation and bronchoconstriction.",
        function: "Used for asthma and allergic rhinitis."
    },
    {
        name: "Pantoprazole",
        salts: "Pantoprazole Sodium",
        working: "Proton pump inhibitor; reduces gastric acid secretion by blocking H+/K+ ATPase.",
        function: "Treats GERD, ulcers, and Zollinger-Ellison syndrome."
    },
    {
        name: "Levocetirizine",
        salts: "Levocetirizine Dihydrochloride",
        working: "Selective H1 receptor antagonist, reducing allergy symptoms.",
        function: "Used for hay fever, allergic rhinitis, and urticaria."
    },
    {
        name: "Losartan",
        salts: "Losartan Potassium",
        working: "Blocks angiotensin II receptors, reducing blood pressure.",
        function: "Used to treat hypertension and protect kidneys in diabetes."
    },
    {
        name: "Hydrocortisone",
        salts: "Hydrocortisone",
        working: "Mimics cortisol; suppresses inflammation and immune response.",
        function: "Used for skin inflammation, adrenal insufficiency, and allergies."
    },
    {
        name: "Risperidone",
        salts: "Risperidone",
        working: "Blocks dopamine and serotonin receptors in CNS, stabilizing mood.",
        function: "Used for schizophrenia, bipolar disorder, and irritability in autism."
    },
    {
        name: "Cefixime",
        salts: "Cefixime",
        working: "Inhibits bacterial cell wall synthesis leading to bacterial death.",
        function: "Used for respiratory tract infections, urinary tract infections, and gonorrhea."
    },
    {
        name: "Dextromethorphan",
        salts: "Dextromethorphan Hydrobromide",
        working: "Suppresses cough reflex in the medulla oblongata.",
        function: "Used to relieve dry cough."
    },
    {
        name: "Allopurinol",
        salts: "Allopurinol",
        working: "Inhibits xanthine oxidase, reducing uric acid production.",
        function: "Used to prevent gout attacks and kidney stones."
    },
    {
        name: "Warfarin",
        salts: "Warfarin Sodium",
        working: "Inhibits vitamin K-dependent clotting factors, reducing blood clot formation.",
        function: "Used to prevent blood clots and stroke."
    },
    {
        name: "Ceftriaxone",
        salts: "Ceftriaxone Sodium",
        working: "Inhibits bacterial cell wall synthesis leading to bacterial death.",
        function: "Used for severe bacterial infections like meningitis and sepsis."
    },
    {
        name: "Insulin",
        salts: "Human Insulin / Insulin Analogs",
        working: "Regulates glucose uptake by cells and reduces blood sugar levels.",
        function: "Used to treat type 1 and type 2 diabetes."
    },
      {
        name: "Lorazepam",
        salts: "Lorazepam",
        working: "Enhances GABA neurotransmission producing sedative and anxiolytic effects.",
        function: "Used for anxiety, insomnia, and seizures."
    },
    {
        name: "Tramadol",
        salts: "Tramadol Hydrochloride",
        working: "Binds to mu-opioid receptors and inhibits reuptake of norepinephrine and serotonin.",
        function: "Used for moderate to severe pain."
    },
    {
        name: "Azithromycin",
        salts: "Azithromycin",
        working: "Inhibits bacterial protein synthesis by binding to 50S ribosomal subunit.",
        function: "Used to treat respiratory tract, skin, and sexually transmitted infections."
    },
    {
        name: "Levothyroxine",
        salts: "Levothyroxine Sodium",
        working: "Synthetic thyroid hormone replacing endogenous thyroxine.",
        function: "Used to treat hypothyroidism."
    },
    {
        name: "Nitrofurantoin",
        salts: "Nitrofurantoin",
        working: "Damages bacterial DNA, inhibiting bacterial growth.",
        function: "Used to treat urinary tract infections."
    },
    {
        name: "Sildenafil",
        salts: "Sildenafil Citrate",
        working: "Inhibits phosphodiesterase-5 (PDE5), enhancing cGMP and relaxing smooth muscles.",
        function: "Used for erectile dysfunction and pulmonary hypertension."
    },
    {
        name: "Clindamycin",
        salts: "Clindamycin Hydrochloride",
        working: "Inhibits bacterial protein synthesis by binding to 50S ribosomal subunit.",
        function: "Used for bacterial infections including skin and respiratory infections."
    },
    {
        name: "Hydroxychloroquine",
        salts: "Hydroxychloroquine Sulfate",
        working: "Interferes with lysosomal activity and antigen presentation.",
        function: "Used for malaria, lupus, and rheumatoid arthritis."
    },
    {
        name: "Fluoxetine",
        salts: "Fluoxetine Hydrochloride",
        working: "Selective serotonin reuptake inhibitor (SSRI), increasing serotonin levels in CNS.",
        function: "Used to treat depression, OCD, and anxiety disorders."
    },
    {
        name: "Diclofenac",
        salts: "Diclofenac Sodium",
        working: "Inhibits COX enzymes, reducing prostaglandin synthesis.",
        function: "Used for pain and inflammation."
    },
    {
        name: "Tetracycline",
        salts: "Tetracycline Hydrochloride",
        working: "Inhibits bacterial protein synthesis by binding to 30S ribosomal subunit.",
        function: "Used for bacterial infections and acne."
    },
    {
        name: "Clonazepam",
        salts: "Clonazepam",
        working: "Enhances GABA activity in CNS, producing anticonvulsant effects.",
        function: "Used for seizures, panic disorder, and anxiety."
    },
    {
        name: "Spironolactone",
        salts: "Spironolactone",
        working: "Aldosterone antagonist; promotes excretion of sodium and water while retaining potassium.",
        function: "Used for hypertension, edema, and heart failure."
    },
    {
        name: "Dextrose",
        salts: "Dextrose Monohydrate",
        working: "Provides glucose for energy metabolism.",
        function: "Used for hypoglycemia and intravenous hydration."
    },
    {
        name: "Morphine",
        salts: "Morphine Sulfate",
        working: "Binds to mu-opioid receptors, reducing pain perception.",
        function: "Used for severe pain relief."
    },
    {
        name: "Baclofen",
        salts: "Baclofen",
        working: "GABA-B receptor agonist, reducing spasticity in muscles.",
        function: "Used for muscle spasms and spasticity."
    },
    {
        name: "Omeprazole",
        salts: "Omeprazole Magnesium",
        working: "Proton pump inhibitor; reduces gastric acid secretion.",
        function: "Used for GERD, ulcers, and acid reflux."
    },
    {
        name: "Rivaroxaban",
        salts: "Rivaroxaban",
        working: "Inhibits factor Xa in coagulation cascade, reducing blood clot formation.",
        function: "Used to prevent and treat blood clots."
    },
    {
        name: "Fexofenadine",
        salts: "Fexofenadine Hydrochloride",
        working: "Selective H1 receptor antagonist, reducing allergic response.",
        function: "Used for allergies and urticaria."
    },
    {
        name: "Propranolol",
        salts: "Propranolol Hydrochloride",
        working: "Non-selective beta blocker; reduces heart rate and blood pressure.",
        function: "Used for hypertension, angina, arrhythmia, and migraine prevention."
    },
    {
        name: "Alprazolam",
        salts: "Alprazolam",
        working: "Enhances GABA neurotransmission in CNS, producing anxiolytic effects.",
        function: "Used for anxiety disorders, panic attacks."
    },
    {
        name: "Cefuroxime",
        salts: "Cefuroxime Axetil",
        working: "Inhibits bacterial cell wall synthesis leading to bacterial death.",
        function: "Used to treat respiratory and urinary tract infections."
    },
    {
        name: "Bisoprolol",
        salts: "Bisoprolol Fumarate",
        working: "Selective beta-1 blocker; reduces heart rate and blood pressure.",
        function: "Used for hypertension, angina, and heart failure."
    },
    {
        name: "Esomeprazole",
        salts: "Esomeprazole Magnesium",
        working: "Proton pump inhibitor; suppresses gastric acid secretion.",
        function: "Used for GERD, ulcers, and acid reflux."
    },
    {
        name: "Cephalexin",
        salts: "Cephalexin Monohydrate",
        working: "Inhibits bacterial cell wall synthesis.",
        function: "Used for respiratory tract, skin, and urinary infections."
    },
    {
        name: "Levobunolol",
        salts: "Levobunolol Hydrochloride",
        working: "Non-selective beta blocker; reduces intraocular pressure.",
        function: "Used to treat glaucoma."
    },
    {
        name: "Prednisolone",
        salts: "Prednisolone",
        working: "Suppresses inflammation and immune responses by acting on glucocorticoid receptors.",
        function: "Used for allergies, asthma, autoimmune disorders, and inflammation."
    },
    {
        name: "Lisinopril",
        salts: "Lisinopril",
        working: "ACE inhibitor; reduces angiotensin II levels and blood pressure.",
        function: "Used for hypertension, heart failure, and post-myocardial infarction."
    },
    {
        name: "Terbutaline",
        salts: "Terbutaline Sulfate",
        working: "Beta-2 adrenergic agonist; relaxes bronchial smooth muscles.",
        function: "Used for asthma and bronchospasm."
    },
    {
        name: "Clarithromycin",
        salts: "Clarithromycin",
        working: "Inhibits bacterial protein synthesis by binding to 50S ribosomal subunit.",
        function: "Used for respiratory tract infections and H. pylori eradication."
    },
    {
        name: "Tamsulosin",
        salts: "Tamsulosin Hydrochloride",
        working: "Alpha-1 adrenergic antagonist; relaxes smooth muscles in prostate and bladder neck.",
        function: "Used for benign prostatic hyperplasia (BPH)."
    },
    {
        name: "Diltiazem",
        salts: "Diltiazem Hydrochloride",
        working: "Calcium channel blocker; relaxes blood vessels and slows heart rate.",
        function: "Used for hypertension, angina, and arrhythmia."
    },
    {
        name: "Methylprednisolone",
        salts: "Methylprednisolone",
        working: "Glucocorticoid; suppresses immune and inflammatory responses.",
        function: "Used for allergies, asthma, autoimmune diseases."
    },
    {
        name: "Amiodarone",
        salts: "Amiodarone Hydrochloride",
        working: "Prolongs cardiac action potential and refractory period.",
        function: "Used to treat ventricular and supraventricular arrhythmias."
    },
    {
        name: "Hydroxyzine",
        salts: "Hydroxyzine Hydrochloride",
        working: "H1 receptor antagonist; produces sedative and anti-allergic effects.",
        function: "Used for anxiety, pruritus, and sedation."
    },
    {
        name: "Glibenclamide",
        salts: "Glibenclamide",
        working: "Stimulates insulin release from pancreatic beta cells.",
        function: "Used for type 2 diabetes."
    },
    {
        name: "Rifaximin",
        salts: "Rifaximin",
        working: "Inhibits bacterial RNA synthesis.",
        function: "Used for traveler’s diarrhea, hepatic encephalopathy, and IBS-D."
    },
    {
        name: "Oxazepam",
        salts: "Oxazepam",
        working: "Enhances GABA activity producing sedative and anxiolytic effects.",
        function: "Used for anxiety and insomnia."
    },
    {
        name: "Phenoxymethylpenicillin",
        salts: "Phenoxymethylpenicillin",
        working: "Inhibits bacterial cell wall synthesis.",
        function: "Used to treat mild to moderate bacterial infections."
    },
    {
        name: "Levocarnitine",
        salts: "L-Carnitine",
        working: "Helps transport fatty acids into mitochondria for energy production.",
        function: "Used for carnitine deficiency and certain metabolic disorders."
    },
     {
        name: "Enalapril",
        salts: "Enalapril Maleate",
        working: "ACE inhibitor; reduces angiotensin II, lowering blood pressure.",
        function: "Used for hypertension and heart failure."
    },
    {
        name: "Valsartan",
        salts: "Valsartan",
        working: "Blocks angiotensin II receptors, reducing blood pressure.",
        function: "Used for hypertension, heart failure, and post-MI treatment."
    },
    {
        name: "Metoprolol",
        salts: "Metoprolol Tartrate",
        working: "Selective beta-1 blocker; reduces heart rate and cardiac output.",
        function: "Used for hypertension, angina, and arrhythmia."
    },
    {
        name: "Amlodipine",
        salts: "Amlodipine Besylate",
        working: "Calcium channel blocker; relaxes vascular smooth muscles.",
        function: "Used for hypertension and angina."
    },
    {
        name: "Digoxin",
        salts: "Digoxin",
        working: "Inhibits Na+/K+ ATPase; increases cardiac contractility.",
        function: "Used for heart failure and atrial fibrillation."
    },
    {
        name: "Hydralazine",
        salts: "Hydralazine Hydrochloride",
        working: "Direct vasodilator; relaxes arteriolar smooth muscles.",
        function: "Used for hypertension and heart failure."
    },
    {
        name: "Isosorbide Mononitrate",
        salts: "Isosorbide Mononitrate",
        working: "Releases nitric oxide, relaxing vascular smooth muscles.",
        function: "Used for angina prophylaxis."
    },
    {
        name: "Verapamil",
        salts: "Verapamil Hydrochloride",
        working: "Calcium channel blocker; reduces heart rate and vasodilates.",
        function: "Used for hypertension, angina, and arrhythmia."
    },
    {
        name: "Propranolol",
        salts: "Propranolol Hydrochloride",
        working: "Non-selective beta blocker; reduces heart rate and blood pressure.",
        function: "Used for hypertension, angina, arrhythmia, and migraine prevention."
    },
    {
        name: "Nitroglycerin",
        salts: "Nitroglycerin",
        working: "Releases nitric oxide; relaxes vascular smooth muscles.",
        function: "Used for angina and heart failure."
    },
    {
        name: "Phenobarbitone",
        salts: "Phenobarbitone Sodium",
        working: "Enhances GABA-mediated inhibition in CNS.",
        function: "Used for seizures and sedation."
    },
    {
        name: "Phenytoin",
        salts: "Phenytoin Sodium",
        working: "Stabilizes neuronal membranes; reduces seizure activity.",
        function: "Used for tonic-clonic and partial seizures."
    },
    {
        name: "Carbamazepine",
        salts: "Carbamazepine",
        working: "Blocks voltage-gated sodium channels, stabilizing hyperexcited neurons.",
        function: "Used for epilepsy, trigeminal neuralgia, and bipolar disorder."
    },
    {
        name: "Valproate",
        salts: "Sodium Valproate",
        working: "Increases GABA levels in CNS, stabilizing neuronal activity.",
        function: "Used for epilepsy, bipolar disorder, and migraine prophylaxis."
    },
    {
        name: "Levetiracetam",
        salts: "Levetiracetam",
        working: "Modulates synaptic neurotransmitter release via SV2A protein.",
        function: "Used for partial and generalized seizures."
    },
    {
        name: "Topiramate",
        salts: "Topiramate",
        working: "Blocks sodium channels, enhances GABA, antagonizes AMPA receptors.",
        function: "Used for epilepsy and migraine prophylaxis."
    },
    {
        name: "Sumatriptan",
        salts: "Sumatriptan Succinate",
        working: "5-HT1 receptor agonist; constricts cranial blood vessels.",
        function: "Used for acute migraine attacks."
    },
    {
        name: "Montelukast",
        salts: "Montelukast Sodium",
        working: "Leukotriene receptor antagonist; reduces airway inflammation.",
        function: "Used for asthma and allergic rhinitis."
    },
    {
        name: "Theophylline",
        salts: "Theophylline",
        working: "Non-selective phosphodiesterase inhibitor; relaxes bronchial smooth muscles.",
        function: "Used for asthma and COPD."
    },
    {
        name: "Budesonide",
        salts: "Budesonide",
        working: "Glucocorticoid; reduces airway inflammation.",
        function: "Used in asthma and COPD inhalers."
    },
    {
        name: "Hydrochlorothiazide",
        salts: "Hydrochlorothiazide",
        working: "Inhibits sodium reabsorption in distal tubules; promotes diuresis.",
        function: "Used for hypertension and edema."
    },
    {
        name: "Furosemide",
        salts: "Furosemide",
        working: "Inhibits sodium and chloride reabsorption in loop of Henle.",
        function: "Used for edema and hypertension."
    },
    {
        name: "Spironolactone",
        salts: "Spironolactone",
        working: "Aldosterone antagonist; promotes sodium excretion while retaining potassium.",
        function: "Used for heart failure, hypertension, and edema."
    },
    {
        name: "Triamterene",
        salts: "Triamterene",
        working: "Potassium-sparing diuretic; inhibits sodium channels in distal tubule.",
        function: "Used with other diuretics to prevent hypokalemia."
    },
    {
        name: "Metolazone",
        salts: "Metolazone",
        working: "Thiazide-like diuretic; inhibits sodium reabsorption in distal tubule.",
        function: "Used for edema in heart failure and renal disease."
    },
    {
        name: "Rifampicin",
        salts: "Rifampicin",
        working: "Inhibits bacterial RNA polymerase.",
        function: "Used for tuberculosis and bacterial infections."
    },
    {
        name: "Isoniazid",
        salts: "Isoniazid",
        working: "Inhibits mycolic acid synthesis in Mycobacterium tuberculosis.",
        function: "Used for tuberculosis treatment and prophylaxis."
    },
    {
        name: "Pyrazinamide",
        salts: "Pyrazinamide",
        working: "Disrupts mycobacterial cell membrane metabolism.",
        function: "Used for tuberculosis treatment."
    },
    {
        name: "Ethambutol",
        salts: "Ethambutol Hydrochloride",
        working: "Inhibits mycobacterial cell wall synthesis.",
        function: "Used for tuberculosis treatment."
    },
    {
        name: "Clozapine",
        salts: "Clozapine",
        working: "Blocks dopamine D2 and serotonin receptors; antipsychotic effect.",
        function: "Used for treatment-resistant schizophrenia."
    }
];

// -------- Medicine Interactions ---------
const medicineInteractions = [
    { meds:["Paracetamol","Ibuprofen"], indication:"Pain relief and fever management." },
    { meds:["Amoxicillin","Clavulanic Acid"], indication:"Broad-spectrum antibiotic combination." },
    { meds:["Aspirin","Clopidogrel"], indication:"Prevent blood clots in cardiovascular diseases." },
    { meds:["Metformin","Sitagliptin"], indication:"Better blood sugar control in type 2 diabetes." },
    { meds:["Losartan","Hydrochlorothiazide"], indication:"Manage hypertension with dual mechanism." },
    { meds:["Omeprazole","Amoxicillin"], indication:"Helicobacter pylori eradication." },
    { meds:["Cetirizine","Montelukast"], indication:"Allergy and asthma symptom relief." },
    { meds:["Salbutamol","Budesonide"], indication:"Asthma exacerbation management." },
    { meds:["Atorvastatin","Aspirin"], indication:"Cardiovascular risk reduction." },
    { meds:["Furosemide","Spironolactone"], indication:"Edema management with potassium balance." },
    { meds:["Diazepam","Clonazepam"], indication:"Anxiety and seizure management." },
    { meds:["Prednisone","Montelukast"], indication:"Severe allergic or asthma inflammation control." },
    { meds:["Cefixime","Clarithromycin"], indication:"Severe bacterial infections, respiratory tract." },
    { meds:["Hydrochlorothiazide","Metoprolol"], indication:"Hypertension combination therapy." },
    { meds:["Pantoprazole","Amoxicillin"], indication:"H. pylori eradication therapy." },
    { meds:["Sildenafil","Nitrate drugs"], indication:"Avoid combination due to hypotension risk." },
    { meds:["Warfarin","Aspirin"], indication:"Blood thinner therapy (monitor bleeding risk)." },
    { meds:["Insulin","Metformin"], indication:"Type 2 diabetes glycemic control." },
    { meds:["Nitroglycerin","Beta blockers"], indication:"Angina treatment with vasodilation and heart rate control." },
    { meds:["Levothyroxine","Calcium supplements"], indication:"Separate timing; calcium can reduce absorption of thyroid hormone." },
    { meds:["Amoxicillin","Cefuroxime"], indication:"Combined for severe bacterial infections." },
    { meds:["Ibuprofen","Diclofenac"], indication:"Pain and inflammation management (use with caution to avoid toxicity)." },
    { meds:["Paracetamol","Tramadol"], indication:"Moderate to severe pain control." },
    { meds:["Metformin","Sitagliptin"], indication:"Better blood sugar control in type 2 diabetes." },
    { meds:["Losartan","Amlodipine"], indication:"Hypertension combination therapy." },
    { meds:["Omeprazole","Ranitidine"], indication:"Ulcer and acid suppression therapy (use sequentially, not simultaneously)." },
    { meds:["Cetirizine","Fexofenadine"], indication:"Allergy symptom relief (usually not combined, but sometimes rotated)." },
    { meds:["Salbutamol","Theophylline"], indication:"Asthma exacerbation management." },
    { meds:["Atorvastatin","Simvastatin"], indication:"Lipid-lowering therapy (usually avoid simultaneous use, monitor side effects)." },
    { meds:["Furosemide","Hydrochlorothiazide"], indication:"Edema and hypertension management." },
    { meds:["Diazepam","Lorazepam"], indication:"Anxiety and seizure control (use carefully, CNS depression risk)." },
    { meds:["Prednisone","Methylprednisolone"], indication:"Severe inflammatory conditions." },
    { meds:["Ceftriaxone","Azithromycin"], indication:"Severe respiratory bacterial infections." },
    { meds:["Hydrochlorothiazide","Spironolactone"], indication:"Edema management with potassium balance." },
    { meds:["Pantoprazole","Esomeprazole"], indication:"Acid-related disorders (usually rotate, not combined)." },
    { meds:["Warfarin","Clopidogrel"], indication:"Anticoagulant therapy (monitor for bleeding)." },
    { meds:["Insulin","Glibenclamide"], indication:"Type 2 diabetes glycemic control." },
    { meds:["Nitroglycerin","Isosorbide Mononitrate"], indication:"Angina management (use carefully to avoid hypotension)." },
    { meds:["Levothyroxine","Liothyronine"], indication:"Thyroid replacement therapy." },
    { meds:["Montelukast","Theophylline"], indication:"Asthma maintenance therapy." },
    { meds:["Amoxicillin","Clarithromycin"], indication:"Helicobacter pylori eradication therapy." },
    { meds:["Cefixime","Ceftriaxone"], indication:"Severe bacterial infections requiring broad coverage." },
    { meds:["Metformin","Sitagliptin"], indication:"Type 2 diabetes combination therapy." },
    { meds:["Lisinopril","Hydrochlorothiazide"], indication:"Hypertension combination therapy." },
    { meds:["Losartan","Hydrochlorothiazide"], indication:"Better blood pressure control." },
    { meds:["Amlodipine","Metoprolol"], indication:"Hypertension and angina management." },
    { meds:["Salbutamol","Montelukast"], indication:"Asthma management." },
    { meds:["Cetirizine","Levocetirizine"], indication:"Allergy symptom relief." },
    { meds:["Tramadol","Paracetamol"], indication:"Moderate pain control." },
    { meds:["Diazepam","Clonazepam"], indication:"Anxiety and seizure control (CNS depressant caution)." },
    { meds:["Prednisone","Hydrocortisone"], indication:"Severe inflammation and autoimmune conditions." },
    { meds:["Omeprazole","Pantoprazole"], indication:"Acid-related disorders (rotate therapy, sometimes sequentially used)." },
    { meds:["Warfarin","Rivaroxaban"], indication:"Anticoagulant therapy (bleeding risk; use only under supervision)." },
    { meds:["Atorvastatin","Rosuvastatin"], indication:"Severe dyslipidemia (careful monitoring required)." },
    { meds:["Furosemide","Spironolactone"], indication:"Edema management with potassium balance." },
    { meds:["Nitroglycerin","Sildenafil"], indication:"Angina and erectile dysfunction (contraindicated together; cautionary example)." },
    { meds:["Levothyroxine","Liothyronine"], indication:"Thyroid replacement therapy." },
    { meds:["Amoxicillin","Cefuroxime"], indication:"Severe bacterial infections." },
    { meds:["Hydroxyzine","Cetirizine"], indication:"Allergy and anxiety relief." },
    { meds:["Montelukast","Theophylline"], indication:"Asthma maintenance therapy." }
];
const sideEffectsData = [
    { name:"Paracetamol", effects:"Liver toxicity if overdosed." },
    { name:"Ibuprofen", effects:"Stomach ulcers, kidney damage if used excessively." },
    { name:"Amoxicillin", effects:"Allergic reactions, diarrhea." },
    { name:"Clavulanic Acid", effects:"Nausea, diarrhea." },
    { name: "Levofloxacin", effects: "Nausea, diarrhea, headache, dizziness, risk of tendon rupture." },
    { name: "Nitazoxanide", effects: "Abdominal pain, nausea, vomiting, headache, greenish urine." },
    { name: "Oseltamivir", effects: "Nausea, vomiting, headache, fatigue, rare neuropsychiatric effects." },
    { name: "Famotidine", effects: "Headache, dizziness, constipation, diarrhea, rare arrhythmias." },
    { name: "Dabigatran", effects: "Bleeding, stomach upset, anemia, bruising, rare liver issues." },
    { name: "Apixaban", effects: "Bleeding, anemia, nausea, bruising, dizziness." },
    { name: "Ramelteon", effects: "Drowsiness, dizziness, fatigue, headache, unusual dreams." },
    { name: "Betahistine", effects: "Headache, nausea, upset stomach, mild allergic reactions." },
    { name: "Dulaglutide", effects: "Nausea, vomiting, diarrhea, abdominal pain, rare pancreatitis." },
    { name: "Semaglutide", effects: "Nausea, vomiting, diarrhea, constipation, abdominal pain." },
    { name: "Ticagrelor", effects: "Bleeding, shortness of breath, headache, dizziness." },
    { name: "Prasugrel", effects: "Bleeding, bruising, anemia, headache, nausea." },
    { name: "Voriconazole", effects: "Visual disturbances, nausea, vomiting, liver toxicity, rash." },
    { name: "Posaconazole", effects: "Nausea, vomiting, diarrhea, liver enzyme elevation, headache." },
    { name: "Rivaroxaban", effects: "Bleeding, bruising, nausea, dizziness, headache." },
    { name: "Edoxaban", effects: "Bleeding, bruising, anemia, nausea, rash." },
    { name: "Methotrexate", effects: "Nausea, fatigue, liver toxicity, mouth ulcers, bone marrow suppression." },
    { name: "Hydroxyurea", effects: "Bone marrow suppression, nausea, vomiting, hair loss, skin changes." },
    { name: "Allopurinol", effects: "Rash, nausea, diarrhea, liver issues, rare hypersensitivity reactions." },
    { name: "Colchicine", effects: "Diarrhea, nausea, vomiting, abdominal pain, rare bone marrow suppression." },
    { name: "Clopidogrel", effects: "Bleeding, bruising, rash, diarrhea, abdominal pain." },
    { name: "Metformin", effects: "Nausea, vomiting, diarrhea, abdominal pain, rare lactic acidosis." },
    { name: "Amlodipine", effects: "Swelling (edema), dizziness, fatigue, palpitations, flushing." },
    { name: "Lisinopril", effects: "Cough, dizziness, headache, hypotension, elevated potassium." },
    { name: "Losartan", effects: "Dizziness, fatigue, hypotension, high potassium, rare kidney issues." },
    { name: "Simvastatin", effects: "Muscle pain, liver enzyme elevation, headache, digestive issues." },
    { name: "Atorvastatin", effects: "Muscle pain, liver enzyme elevation, digestive upset, headache." },
    { name: "Omeprazole", effects: "Headache, nausea, diarrhea, abdominal pain, long-term B12 deficiency." },
    { name: "Pantoprazole", effects: "Headache, diarrhea, abdominal pain, nausea, dizziness." },
    { name: "Esomeprazole", effects: "Headache, nausea, diarrhea, flatulence, abdominal pain." },
    { name: "Cetirizine", effects: "Drowsiness, dry mouth, fatigue, headache, mild nausea." },
    { name: "Levocetirizine", effects: "Drowsiness, fatigue, dry mouth, headache, rare abdominal pain." },
    { name: "Salbutamol", effects: "Tremor, palpitations, headache, muscle cramps, nervousness." },
    { name: "Montelukast", effects: "Headache, abdominal pain, dizziness, cough, rare mood changes." },
    { name: "Prednisone", effects: "Weight gain, mood swings, increased blood sugar, fluid retention." },
    { name: "Hydrocortisone", effects: "Skin thinning, acne, mood changes, increased blood sugar." },
    { name: "Diazepam", effects: "Drowsiness, fatigue, dizziness, muscle weakness, dependency." },
    { name: "Lorazepam", effects: "Drowsiness, dizziness, weakness, fatigue, dependency risk." },
    { name: "Alprazolam", effects: "Drowsiness, fatigue, dizziness, memory issues, dependency risk." },
    { name: "Tramadol", effects: "Nausea, dizziness, constipation, drowsiness, risk of dependence." },
    { name: "Warfarin", effects: "Bleeding, bruising, nausea, dizziness, hair loss." },
    { name: "Rivaroxaban", effects: "Bleeding, anemia, nausea, headache, dizziness." },
    { name: "Cefixime", effects: "Diarrhea, nausea, stomach pain, rash, headache." },
    { name: "Ceftriaxone", effects: "Diarrhea, allergic reactions, injection site reactions, rash." },
    { name: "Cefuroxime", effects: "Diarrhea, nausea, vomiting, rash, headache." },
    { name: "Azithromycin", effects: "Nausea, diarrhea, stomach pain, headache, dizziness." },
    { name: "Clarithromycin", effects: "Nausea, vomiting, diarrhea, abdominal pain, taste disturbances." },
    { name: "Doxycycline", effects: "Nausea, vomiting, diarrhea, photosensitivity, teeth discoloration." },
    { name: "Tetracycline", effects: "Nausea, vomiting, diarrhea, photosensitivity, teeth discoloration." },
    { name: "Nitrofurantoin", effects: "Nausea, vomiting, brown urine, headache, lung reactions (rare)." },
    { name: "Amoxicillin", effects: "Diarrhea, nausea, vomiting, rash, allergic reactions." },
    { name: "Phenoxymethylpenicillin", effects: "Allergic reactions, rash, diarrhea, nausea, vomiting." },
    { name: "Isoniazid", effects: "Liver toxicity, peripheral neuropathy, nausea, rash." },
    { name: "Rifampicin", effects: "Orange discoloration of urine/sweat, liver toxicity, nausea, rash." },
    { name: "Pyrazinamide", effects: "Liver toxicity, joint pain, nausea, vomiting, rash." },
    { name: "Ethambutol", effects: "Vision changes, nausea, rash, joint pain, peripheral neuropathy." },
    { name: "Metoprolol", effects: "Fatigue, dizziness, slow heart rate, hypotension, cold extremities." },
    { name: "Bisoprolol", effects: "Fatigue, dizziness, slow heart rate, hypotension, headache." },
    { name: "Propranolol", effects: "Fatigue, dizziness, hypotension, cold hands/feet, sleep disturbances." },
    { name: "Carvedilol", effects: "Dizziness, fatigue, hypotension, bradycardia, weight gain." },
    { name: "Digoxin", effects: "Nausea, vomiting, diarrhea, confusion, visual disturbances." },
    { name: "Furosemide", effects: "Electrolyte imbalance, dehydration, dizziness, hypotension." },
    { name: "Hydrochlorothiazide", effects: "Electrolyte imbalance, dizziness, hypotension, increased urination." },
    { name: "Spironolactone", effects: "Hyperkalemia, dizziness, nausea, menstrual irregularities." },
    { name: "Triamterene", effects: "Hyperkalemia, nausea, dizziness, headache." },
    { name: "Metolazone", effects: "Electrolyte imbalance, dizziness, hypotension, nausea." },
    { name: "Isosorbide Mononitrate", effects: "Headache, dizziness, flushing, hypotension." },
    { name: "Nitroglycerin", effects: "Headache, dizziness, hypotension, flushing." },
    { name: "Theophylline", effects: "Nausea, vomiting, headache, insomnia, palpitations." }
];
const alternativeMedicines = [
    { name: "Paracetamol", alternatives: ["Ibuprofen", "Aspirin", "Naproxen"] },
    { name: "Amoxicillin", alternatives: ["Cefixime", "Cefuroxime", "Doxycycline"] },
    { name: "Aspirin", alternatives: ["Ibuprofen", "Naproxen", "Diclofenac"] },
    { name: "Metformin", alternatives: ["Glibenclamide", "Glipizide", "Sitagliptin"] },
    { name: "Ibuprofen", alternatives: ["Aspirin", "Naproxen", "Diclofenac"] },
    { name: "Ciprofloxacin", alternatives: ["Levofloxacin", "Ofloxacin", "Azithromycin"] },
    { name: "Omeprazole", alternatives: ["Pantoprazole", "Esomeprazole", "Lansoprazole"] },
    { name: "Cetirizine", alternatives: ["Loratadine", "Fexofenadine", "Levocetirizine"] },
    { name: "Salbutamol", alternatives: ["Terbutaline", "Formoterol", "Salmeterol"] },
    { name: "Atorvastatin", alternatives: ["Simvastatin", "Rosuvastatin", "Pravastatin"] },
    { name: "Losartan", alternatives: ["Valsartan", "Telmisartan", "Irbesartan"] },
    { name: "Levothyroxine", alternatives: ["Liothyronine", "Desiccated Thyroid", "Thyroxine"] },
    { name: "Clopidogrel", alternatives: ["Prasugrel", "Ticagrelor", "Aspirin"] },
    { name: "Ranitidine", alternatives: ["Famotidine", "Nizatidine", "Cimetidine"] },
    { name: "Doxycycline", alternatives: ["Tetracycline", "Minocycline", "Azithromycin"] },
    { name: "Prednisone", alternatives: ["Hydrocortisone", "Methylprednisolone", "Dexamethasone"] },
    { name: "Furosemide", alternatives: ["Torsemide", "Bumetanide", "Hydrochlorothiazide"] },
    { name: "Hydrochlorothiazide", alternatives: ["Indapamide", "Metolazone", "Chlorthalidone"] },
    { name: "Simvastatin", alternatives: ["Atorvastatin", "Rosuvastatin", "Pravastatin"] },
    { name: "Clarithromycin", alternatives: ["Azithromycin", "Erythromycin", "Doxycycline"] },
    { name: "Gabapentin", alternatives: ["Pregabalin", "Carbamazepine", "Valproate"] },
    { name: "Diazepam", alternatives: ["Lorazepam", "Alprazolam", "Clonazepam"] },
    { name: "Montelukast", alternatives: ["Zafirlukast", "Budesonide inhaler", "Fluticasone inhaler"] },
    { name: "Pantoprazole", alternatives: ["Omeprazole", "Esomeprazole", "Lansoprazole"] },
    { name: "Levocetirizine", alternatives: ["Cetirizine", "Loratadine", "Fexofenadine"] },
    { name: "Hydrocortisone", alternatives: ["Prednisone", "Methylprednisolone", "Dexamethasone"] },
    { name: "Risperidone", alternatives: ["Olanzapine", "Quetiapine", "Aripiprazole"] },
    { name: "Cefixime", alternatives: ["Amoxicillin", "Cefuroxime", "Azithromycin"] },
    { name: "Dextromethorphan", alternatives: ["Bromhexine", "Guaifenesin", "Pholcodine"] }
];

// Fill combinations for each medicine
medicines.forEach(med => {
    med.combinations = medicineInteractions
        .filter(combo => combo.meds.includes(med.name))
        .map(combo => combo.meds.filter(name => name !== med.name));
});

// ---------------- Sidebar navigation ----------------
function showSection(id, event){
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
    if(event) event.target.classList.add('active');

    if(id === 'dosage') displayDosageList();
}

// ---------------- Display Medicines ----------------
function loadMedicines(list = medicines){
    const container = document.getElementById('medicineCards');
    container.innerHTML = '';
    list.forEach(med => {
        const card = document.createElement('div');
        card.className = 'medicine-card';
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p><strong>Salts:</strong> ${med.salts}</p>
            <p><strong>Working:</strong> ${med.working}</p>
            <p><strong>Function:</strong> ${med.function}</p>
            <p><strong>Usually combined with:</strong> ${med.combinations.join(', ') || '-'}</p>
        `;
        container.appendChild(card);
    });
}

// ---------------- Search Medicines ----------------
function searchMedicine(){
    const query = document.getElementById('searchInput').value.toLowerCase();
    const dropdown = document.getElementById('autocompleteList');
    dropdown.innerHTML = '';

    if(query === ''){
        loadMedicines();
        return;
    }

    const filtered = medicines.filter(med => med.name.toLowerCase().includes(query));
    loadMedicines(filtered);

    filtered.forEach(med => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.innerText = med.name;
        item.onclick = () => {
            document.getElementById('searchInput').value = med.name;
            dropdown.innerHTML = '';
            loadMedicines([med]);
        };
        dropdown.appendChild(item);
    });
}

// ---------------- Populate Combination Dropdowns ----------------
function populateMedicineSelects(){
    const med1 = document.getElementById('med1Select');
    const med2 = document.getElementById('med2Select');
    medicines.forEach(med => {
        [med1, med2].forEach(select => {
            const option = document.createElement('option');
            option.value = med.name;
            option.innerText = med.name;
            select.appendChild(option);
        });
    });
}

// ---------------- Check Combination ----------------
function checkCombination(med1, med2){
    const combo = medicineInteractions.find(item =>
        item.meds.includes(med1) && item.meds.includes(med2)
    );
    const resultDiv = document.getElementById('combinationResult');
    if(combo){
        resultDiv.innerHTML = `<p><strong>${med1} + ${med2} may be prescribed for:</strong> ${combo.indication}</p>`;
    } else {
        resultDiv.innerHTML = `<p>No specific common indication found for ${med1} and ${med2}.</p>`;
    }
}

function checkSelectedCombination(){
    const med1 = document.getElementById('med1Select').value;
    const med2 = document.getElementById('med2Select').value;
    if(med1 && med2) checkCombination(med1, med2);
    else alert("Please select both medicines.");
}

// ---------------- Dosage List ----------------
function displayDosageList(){
    const container = document.getElementById('dosageList');
    container.innerHTML = '';
    medicines.forEach(med => {
        const card = document.createElement('div');
        card.className = 'medicine-card';
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p><strong>Usually combined with:</strong> ${med.combinations.join(', ') || '-'}</p>
        `;
        container.appendChild(card);
    });
}

// ---------------- Search Side Effects ----------------
function searchSideEffects(){
    const query = document.getElementById('sideSearch').value.toLowerCase();
    const container = document.getElementById('sideEffectsResult');
    container.innerHTML = '';

    const filtered = sideEffectsData.filter(med =>
        med.name.toLowerCase().includes(query)
    );

    filtered.forEach(med => {
        const card = document.createElement('div');
        card.className = "medicine-card";
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p><strong>Side Effects:</strong> ${med.effects}</p>
        `;
        container.appendChild(card);
    });
}

// ---------------- Search Alternatives ----------------
function searchAlternatives(){
    const query = document.getElementById("altSearch").value.toLowerCase();
    const container = document.getElementById("altResults");
    container.innerHTML = "";

    if(query === "") return;

    const filtered = alternativeMedicines.filter(med =>
        med.name.toLowerCase().includes(query)
    );

    if(filtered.length === 0){
        container.innerHTML = "<p>No medicine found</p>";
        return;
    }

    filtered.forEach(med => {
        const card = document.createElement("div");
        card.className = "medicine-card";
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p><strong>Alternatives:</strong> ${med.alternatives.join(", ")}</p>
        `;
        container.appendChild(card);
    });
}

// ---------------- Initialize ----------------
window.onload = function(){
    loadMedicines();
    populateMedicineSelects();
};