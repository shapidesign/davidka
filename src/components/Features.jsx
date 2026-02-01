import React from 'react'

const features = [
    {
        title: "תווים רחבים ב-15%",
        description: "התווים שלנו מהונדסים מדעית לתפוס בדיוק מספיק מקום נוסף שהמרצה לא ישים לב, אבל מספר העמודים כן."
    },
    {
        title: "אופטימיזציית ריווח",
        description: "הגדלנו את המרווח בין האותיות בשבריר מילימטר. זה מצטבר לעמוד שלם בעבודת סמינריון של 20 עמודים."
    },
    {
        title: "בונוס גובה שורה",
        description: "גובה שורה גבוה במעט מבטיח שהרווח הכפול שלך ירגיש כמו משולש, בלי להיראות כאילו אתה מרמה."
    },
    {
        title: "ריפוד סימני פיסוק",
        description: "נקודות, פסיקים וסימני קריאה מגיעים עכשיו עם מרחב אישי משלהם. כי דקדוק צריך לנשום."
    }
]

const Features = () => {
    return (
        <section className="py-24 bg-[#fdfbf7]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-davidka text-center mb-16 tracking-tight">
                    למה לבחור בדוידקה?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <h3 className="text-xl font-bold font-davidka mb-4">{feature.title}</h3>
                            <p className="text-gray-600 font-david leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
