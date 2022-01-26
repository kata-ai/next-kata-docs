---
id: how-to-use-super-model-to-improve-your-bot-intelligence
title: How to Use Super Model (“Kata Entity”) to Improve Your Bot Intelligence
---

## Introduction

Super Model or Kata Entity is a highly maintained entity that you can use right out of the box. This feature lets you build your NL faster and easier without training. This model lets you extract specific words in a sentence, like a person’s name, location, and more.

This entity will be added automatically when you create a new project on the Entities page. Also, you can use this entity right away without adding any training data. Kata maintains the model for this entity, and all users will automatically get the updated version whenever Kata improves it.

<div className="info">
    <img className="borderless" src="/assets/images/icon-info.svg" />
    <div>
        <p>Important:
            <ul>
                <li>Training this entity won’t affect the prediction result, but we encourage you to do so if you find any
                mispredictions, as we will use it to improve the models.</li>
                <li>Once you <b>delete</b> this entity, you can’t retrieve it back, be careful when doing this.
                If you want to use the entity, you can create a new project again.</li>
            </ul>
        </p>
    </div>
</div>

These are steps to access the feature:

1. First, go to your **project**, then click **NLU**.
2. You will see an automatically generated entity named “kata”, the supermodel.
3. You can see the model detail by clicking the card. Then it will show available labels.

Here is the explanation of each label and examples of what the Super Model can automatically identify words.

| Label       | Description                                                                       | Examples                                                                            |
| ----------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Person      | Person’s name                                                                     | Budi, Siti, Rina Putri                                                              |
| Location    | General location, city, country, address                                          | Jakarta, Indonesia, Jln Pangeran Antasari 18A                                       |
| Email       | General email                                                                     | business@mail.com, jobs@company.com                                                 |
| Phone       | General phone                                                                     | +62 80123456789, (021) 3456789, 021-5678-9012                                       |
| Datetime    | Date and time                                                                     | hari ini, 17 Agustus 1945, tahun 2019, besok, 17/9/45, jam 3 siang, pagi ini, 19:00 |
| Number      | Number in digit, number in word, sequence of number, mix number in digit and word | 123, 92, 9.000, satu, dua, tiga ribu, dua tiga, delapan tujuh, 9 juta, 5rb          |
| Currency    | Currency name, money                                                              | IDR, SGD, rupiah, US dollar, Rp 5000, 5 ribu rupihah, $3, 9 USD                     |
| Area        | Unit area                                                                         | 5 meter persegi, sepuluh m2, 200 ha                                                 |
| Duration    | Unit duration                                                                     | 3 jam, 10 detik, 5 jam 30 menit, sehari, dua hari                                   |
| Length      | Unit length                                                                       | 5 meter, delapan cm                                                                 |
| Temperature | Unit temperature                                                                  | 40 derajat celcius, -5 derajat                                                      |
| Volume      | Unit volume                                                                       | 6 liter                                                                             |
| Weight      | Unit weight                                                                       | tujuh kilogram, 5 gr, 9kg                                                           |

## How to Use

In this guidance, you will implement a bot that uses Super Model.

Here is how.

1. In Kata Platform, go to the **Flow** menu. Then, click the **NLUs** menu in the sidebar.

![Image 1 alt](/assets/images/products/kata-platform/how-to/how-to-use-super-model-to-improve-your-bot-intelligence/image1.png)

> **Figure 1**: NLUs position in sidebar.

2. Click on the **Create NLU** button. Then it will show a form on the right screen.
3. Fill in NLUs name and choose an NLU Type. For this guide, fill in “supermodel” for the name and choose **NL**.
4. On the **NLU ID** search and dropdown, you will search your NLU to integrate it into your chatbot. NLU ID consists of username and project with format `[username]:[project name]`. For example, in the getting started chatbot section, your NLU ID format is `muhfadhiilkata:test_simple_bot`.
5. **Threshold** can act as a confidence level, and these values range from 0.0 (completely uncertain) to 1.0 (completely confident). This confidence level is usually set between 0.7 to 0.8. So the data that falls under 0.7/0.8 will not be detected by the bot. The field only allows numbers and decimals to separate using “.” character. Fill in 0.8 in this field.
6. **Output** has several output types, depending on the entity type you used. For example, for Super Model implementation, choose Phrase.

| Output Types | Functionals                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| Raw          | Use this output type if your entity type is “trait”. It will result in raw sentences.                               |
| Dictionary   | Use this output type if your entity type is “dictionary”. It will result in an array consisting of keys and labels. |
| Phrase       | Using supermodel “kata entity”, you must use this output type.                                                      |

7. **Entity Name** is a feature to define the entity name when choosing a Super Model. Fill in with “kata”.
8. Click **Create** to finish your NLUs.

Next, you will define this NLU inside an intent. So, you will create an intent name “supermodNL”, for example.

1. Go to the **Conversation Flows** menu, then click on the **Intent** tab.

![Image 2 alt](/assets/images/products/kata-platform/how-to/how-to-use-super-model-to-improve-your-bot-intelligence/image2.png)

> **Figure 2**: Intent tab position.

2. Click the **Create Intent** button. Then a form will show on the right screen
3. In **Intent Type**, choose **Text** to start setup.
4. Next, click the button **Add classifier**. This feature enables you to insert your NLUs inside the intent, so intent can match whether end-user input is understandable by the NLU or not. First, there is a dropdown to choose available NLUs, then select “supermodel”.
5. **Match with** feature enables you to specify which label in supermodel that you want to use in your intent. For example, if you want your bot to identify a person's name, you will use a person label. Fill in with person.
6. Next, click on the kebab menu to choose **Add custom option**. It will show a code block. Fill the code box as follows:

```
labels: true
```

1. Your result when creating a classifier will be as follows:

![Image 3 alt](/assets/images/products/kata-platform/how-to/how-to-use-super-model-to-improve-your-bot-intelligence/image3.png)

> **Figure 3**: Add classifier example.

2. Then, click the button **Add attribute**. This feature enables you to insert your NLUs inside the intent, similar to the Add Classifier feature, with differentiation that bot developers can create a condition in state or transition by using the entity’s label. It is because an attribute is a variable that has an array form. In the 5th step, you will use person label from Super Model, then fill in the field as follows:

```
Name: name
NLU: supermodNL
Path: person
```

3. Your result after creating the attribute will be as follows:

![Image 4 alt](/assets/images/products/kata-platform/how-to/how-to-use-super-model-to-improve-your-bot-intelligence/image3.png)

> **Figure 4**: Add attribute example.

4. Click **Create** to create an intent.

The next step is to use the intent as a condition in transition (most common). If you want to create your chatbot, recognize a person’s name by filling in the condition as follows:

```
intent==‘supermodNL’
```

This is the end of the guidance. You can contact <a href="mailto:support@kata.ai">support@kata.ai</a> if you have any difficulties when implementing this.