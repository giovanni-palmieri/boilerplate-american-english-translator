const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  //British To American
  test("Translate Mangoes are my favorite fruit. to British English", () => {
    const input = "Mangoes are my favorite fruit.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'Mangoes are my <span class="highlight">favourite</span> fruit.',
    );
  });

  test("Translate I ate yogurt for breakfast. to British English", () => {
    const input = "I ate yogurt for breakfast.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'I ate <span class="highlight">yoghurt</span> for breakfast.',
    );
  });

  test("Translate We had a party at my friend's condo. to British English", () => {
    const input = "We had a party at my friend\'s condo.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'We had a party at my friend\'s <span class="highlight">flat</span>.',
    );
  });

  test("Translate Can you toss this in the trashcan for me? to British English", () => {
    const input = "Can you toss this in the trashcan for me?";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'Can you toss this in the <span class="highlight">bin</span> for me?',
    );
  });

  test("Translate The parking lot was full. to British English", () => {
    const input = "The parking lot was full.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'The <span class="highlight">car park</span> was full.',
    );
  });

  test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
    const input = "Like a high tech Rube Goldberg machine.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'Like a high tech <span class="highlight">Heath Robinson device</span>.',
    );
  });

  test("Translate To play hooky means to skip class or work. to British English", () => {
    const input = "To play hooky means to skip class or work.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'To <span class="highlight">bunk off</span> means to skip class or work.',
    );
  });

  test("Translate No Mr. Bond, I expect you to die. to British English", () => {
    const input = "No Mr. Bond, I expect you to die.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'No <span class="highlight">Mr</span> Bond, I expect you to die.',
    );
  });

  test("Translate Dr. Grosh will see you now. to British English", () => {
    const input = "Dr. Grosh will see you now.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      '<span class="highlight">Dr</span> Grosh will see you now.',
    );
  });

  test("Translate Lunch is at 12:15 today. to British English", () => {
    const input = "Lunch is at 12:15 today.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'Lunch is at <span class="highlight">12.15</span> today.',
    );
  });

  //American To British
  test("Translate We watched the footie match for a while. to American English", () => {
    const input = "We watched the footie match for a while.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'We watched the <span class="highlight">soccer</span> match for a while.',
    );
  });

  test("Translate Paracetamol takes up to an hour to work. to American English", () => {
    const input = "Paracetamol takes up to an hour to work.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.',
    );
  });

  test("Translate First, caramelise the onions. to American English", () => {
    const input = "First, caramelise the onions.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'First, <span class="highlight">caramelize</span> the onions.',
    );
  });

  test("Translate I spent the bank holiday at the funfair. to American English", () => {
    const input = "I spent the bank holiday at the funfair.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
    );
  });

  test("Translate I had a bicky then went to the chippy. American English", () => {
    const input = "I had a bicky then went to the chippy.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
    );
  });

  test("Translate I've just got bits and bobs in my bum bag. American English", () => {
    const input = "I've just got bits and bobs in my bum bag.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
    );
  });

  test("Translate The car boot sale at Boxted Airfield was called off. American English", () => {
    const input = "The car boot sale at Boxted Airfield was called off.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
    );
  });

  test("Translate Have you met Mrs Kalyani? American English", () => {
    const input = "Have you met Mrs Kalyani?";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'Have you met <span class="highlight">Mrs.</span> Kalyani?',
    );
  });

  test("Translate Prof Joyner of King's College, London. American English", () => {
    const input = "Prof Joyner of King's College, London.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
    );
  });

  test("Translate Tea time is usually around 4 or 4.30. American English", () => {
    const input = "Tea time is usually around 4 or 4.30.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
    );
  });

  //highlight
  test("Highlight translation in Mangoes are my favorite fruit.", () => {
    const input = "Mangoes are my favorite fruit.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'Mangoes are my <span class="highlight">favourite</span> fruit.',
    );
  });

  test("Highlight translation in I ate yogurt for breakfast.", () => {
    const input = "I ate yogurt for breakfast.";
    const locale = "american-to-british";
    assert.equal(
      translator.translate(input, locale),
      'I ate <span class="highlight">yoghurt</span> for breakfast.',
    );
  });

  test("Highlight translation in We watched the footie match for a while.", () => {
    const input = "We watched the footie match for a while.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      'We watched the <span class="highlight">soccer</span> match for a while.',
    );
  });

  test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
    const input = "Paracetamol takes up to an hour to work.";
    const locale = "british-to-american";
    assert.equal(
      translator.translate(input, locale),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.',
    );
  });
});
