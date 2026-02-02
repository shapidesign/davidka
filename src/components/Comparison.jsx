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
          <p className="font-david text-xl text-gray-600 mt-4 max-w-2xl mx-auto">דוד מימין, דוידקה משמאל. נסה בעצמך בתיבה למטה:</p>
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

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* David Libre Column */}
          <div className="bg-[#f0f0f0] p-1 rounded-xl shadow-lg relative h-full">
            <div className="absolute -top-3 left-4 bg-[#2c2c2c] text-white px-3 py-1 rounded-t-lg text-sm font-bold z-0">
              David Libre (רגיל)
            </div>
            <div className="bg-white p-8 md:p-12 h-full min-h-[500px] mt-4 relative z-10 paper-texture">
              <p className="font-david text-lg md:text-xl leading-relaxed text-justify whitespace-pre-wrap">
                {text}
              </p>
            </div>
          </div>

          {/* Davidka Column */}
          <div className="bg-[#e0e0e0] p-1 rounded-xl shadow-lg relative h-full">
            <div className="absolute -top-3 right-4 bg-[#3aa2db] text-white px-3 py-1 rounded-t-lg text-sm font-bold z-0">
              Davidka (מורחב)
            </div>
            <div className="bg-white p-8 md:p-12 h-full min-h-[500px] mt-4 relative z-10 paper-texture">
              <p className="font-davidka text-lg md:text-xl leading-relaxed text-justify whitespace-pre-wrap">
                {text}
              </p>
            </div>
          </div>
        </div>

        {/* Infographic - Visible on all screens */}
        <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-2xl border border-gray-200 max-w-4xl mx-auto text-center shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold font-davidka mb-8 text-gray-800">ממוצע מילים למסמך של 15 עמודים</h3>
          <p className="text-gray-500 mb-8 font-david">גודל גופן 12pt • רווח שורה וחצי</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-300 flex items-center justify-center mb-4 bg-white shadow-inner">
                <span className="text-2xl md:text-3xl font-bold text-gray-400 font-david">6,480</span>
              </div>
              <span className="font-bold text-gray-500 text-lg">David</span>
            </div>

            <div className="hidden md:block text-4xl text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </div>
            <div className="md:hidden text-2xl text-gray-300">
              ↓
            </div>

            <div className="flex flex-col items-center relative">
              <div className="absolute -top-4 -right-4 bg-[#3aa2db] text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                -8.2% מילים
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#3aa2db] flex items-center justify-center mb-4 bg-white shadow-lg transform scale-110">
                <span className="text-3xl md:text-4xl font-bold text-[#3aa2db] font-davidka">5,950</span>
              </div>
              <span className="font-bold text-[#3aa2db] text-xl">Davidka</span>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-600 font-david max-w-2xl mx-auto">
            <span className="font-bold text-[#3aa2db]">זהו חיסכון של 530 מילים!</span><br />
            זה כמו לא לכתוב את המבוא, ועדיין לקבל את מלוא הניקוד על האורך.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Comparison
