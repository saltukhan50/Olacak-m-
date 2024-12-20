
// OhMyMN API yüklendikten sonra çalışır
marginNote.onLoad(() => {
    console.log("Addon loaded: Auto Highlighter");
    try {
        highlightNotes();
    } catch (error) {
        console.error("Error in highlightNotes:", error);
    }
});

// Tüm notları sarı renkle vurgulayan işlev
function highlightNotes() {
    const notes = marginNote.getAllNotes(); // Tüm notları al
    if (!notes || notes.length === 0) {
        console.log("No notes found!");
        return;
    }
    notes.forEach(note => {
        try {
            marginNote.addHighlight(note, "yellow"); // Sarı vurgu ekle
        } catch (error) {
            console.error("Error adding highlight to note:", note, error);
        }
    });
}
