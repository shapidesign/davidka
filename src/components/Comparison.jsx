import React, { useState } from 'react'

const Comparison = () => {
  const [text, setText] = useState("השימוש בגופנים ממשפחת הסריף, ובפרט בגופן 'דוד', נחשב לסטנדרט המקובל בכתיבה אקדמית ומשפטית בישראל מזה עשרות שנים. הגופן משדר רשמיות, סמכותיות וניקיון צורני. כאשר אנו מרחיבים את האותיות בשיעור של כחמישה אחוזים ומוסיפים מרווח מזערי בין התווים, אנו יוצרים שינוי מצטבר המשפיע באופן דרמטי על פריסת הטקסט בדף. התוצאה היא מסמך הנראה זהה למקור בקריאה רגילה, אך מצליח 'למתוח' את מספר העמודים באופן משמעותי מבלי לפגוע בחוויית הקריאה של המרצה או המעסיק.")

  return (
    <section id="comparison" className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold font-david absolute top-0 left-0 w-full text-[#3aa2db] opacity-40 blur-[0.5px]">ראה את ההבדל</h2>
            <h2 className="text-4xl md:text-5xl font-bold font-davidka relative z-10 text-[#2c2c2c]">ראה את ההבדל</h2>
          </div>
          <p className="font-david text-xl text-gray-600 mt-4 max-w-2xl mx-auto">דוד משמאל, דוידקה מימין. נסה בעצמך בתיבה למטה:</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-4 border-2 border-[#3aa2db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3aa2db] font-david text-lg shadow-sm resize-y min-h-[100px]"
            placeholder="הקלד טקסט כאן..."
            dir="rtl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* David Libre Column */}
          <div className="bg-[#f0f0f0] p-1 rounded-xl shadow-lg relative">
            <div className="absolute -top-3 left-4 bg-[#3aa2db] text-white px-3 py-1 rounded-t-lg text-sm font-bold z-0">
              David Libre (רגיל)
            </div>
            <div className="bg-white p-8 md:p-12 min-h-[500px] mt-4 relative z-10 paper-texture">
              <p className="font-david text-lg md:text-xl leading-relaxed text-justify whitespace-pre-wrap">
                {text}
              </p>
            </div>
          </div>

          {/* Davidka Column */}
          <div className="bg-[#e0e0e0] p-1 rounded-xl shadow-lg relative">
            <div className="absolute -top-3 right-4 bg-[#2c2c2c] text-white px-3 py-1 rounded-t-lg text-sm font-bold z-0">
              Davidka (מורחב)
            </div>
            <div className="bg-white p-8 md:p-12 min-h-[500px] mt-4 relative z-10 paper-texture">
              <p className="font-davidka text-lg md:text-xl leading-relaxed text-justify whitespace-pre-wrap">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison
