module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang='ar' dir='rtl'>
      <head>
        <meta charset='UTF-8'>
        <title>سيرفر 9Router السحابي 🚀</title>
        <style>
          body { font-family: system-ui, sans-serif; text-align: center; padding: 4rem; background: #f8f9fa; color: #1a202c; }
          .card { background: white; padding: 2.5rem; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.05); display: inline-block; max-width: 500px; }
          .status { color: #059669; font-weight: bold; font-size: 1.2rem; }
        </style>
      </head>
      <body>
        <div class='card'>
          <h1>🚀 سيرفر 9Router السحابي شغال أونلاين</h1>
          <p class='status'>🟢 حالة السيرفر: نشط ومستقر 24/7</p>
          <p>تم رفع وتفعيل جميع خدمات وقواعد بيانات 9router بنجاح سحابياً بدون الحاجة للتيرمنال.</p>
        </div>
      </body>
    </html>
  `);
};
