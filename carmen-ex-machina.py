from flask import Flask, render_template, url_for, request
from happytransformer import HappyGeneration
from happytransformer import GENSettings

app = Flask(__name__)

happy_gen = HappyGeneration("text-generation", "EleutherAI/gpt-neo-1.3B")
args = GENSettings(no_repeat_ngram_size=2, temperature=0.8,do_sample=True, min_length=50)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/generatePoem', methods=['POST'])
def generatePoem():
    prompt = request.form['prompt']
    result = happy_gen.generate_text(prompt, args=args)
    response = prompt + result.text
    return response

if __name__ == "__main__":
    app.run(debug=True)

