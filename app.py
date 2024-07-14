from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    prevalence = data['prevalence']
    sensitivity = data['sensitivity']
    specificity = data['specificity']
    
    p_disease = prevalence
    p_no_disease = 1 - p_disease
    
    p_test_pos_given_disease = sensitivity
    p_test_neg_given_no_disease = specificity
    
    p_test_pos = (p_test_pos_given_disease * p_disease) + ((1 - p_test_neg_given_no_disease) * p_no_disease)
    p_test_neg = (p_test_neg_given_no_disease * p_no_disease) + ((1 - p_test_pos_given_disease) * p_disease)
    
    p_disease_given_test_pos = (p_test_pos_given_disease * p_disease) / p_test_pos
    p_disease_given_test_neg = ((1 - p_test_pos_given_disease) * p_disease) / p_test_neg
    
    return jsonify({
        'probabilityPositive': p_disease_given_test_pos,
        'probabilityNegative': p_disease_given_test_neg
    })

if __name__ == '__main__':
    app.run(debug=True)
