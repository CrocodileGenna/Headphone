app.post('/api/translate', async (req, res) => {
  const { texts, targetLang } = req.body;
  console.log(`Получен запрос на перевод (${targetLang}):`, texts); // Лог в терминале

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-4o-mini",
      messages: [{ 
        role: "system", 
        content: "You are a translator. Return ONLY JSON." 
      }, { 
        role: "user", 
        content: `Translate to ${targetLang}. Return JSON object with key "translations" (array of strings): ${JSON.stringify(texts)}` 
      }],
      response_format: { type: "json_object" }
    }, {
      headers: { 
        'Authorization': `Bearer ВАШ_КЛЮЧ`, // ПРОВЕРЬТЕ КЛЮЧ!
        'Content-Type': 'application/json'
      }
    });

    const aiData = JSON.parse(response.data.choices[0].message.content);
    console.log("Ответ от ИИ:", aiData); // Проверяем, что пришло от нейронки
    res.json(aiData);
  } catch (error) {
    console.error("Ошибка API:", error.response?.data || error.message);
    res.status(500).json({ error: "Ошибка на стороне ИИ" });
  }
});