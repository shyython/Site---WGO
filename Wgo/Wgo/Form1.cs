namespace Wgo
{
    public partial class Form1 : Form
    {
        public Form2 Form2 { get; private set; }

        public Form1()
        {
            InitializeComponent();
            string email, senha;
            email = TextEmail.Text;
            senha = TextSenha.Text;
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {


            if (TextEmail.Text == "" && TextSenha.Text == "")
            {
                LblEmail.ForeColor = Color.Red;
                LblSenha.ForeColor = Color.Red;
                LblErroVazio.Visible = true;
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form2 = new Form2();
            Form2.Show();
            this.Hide();
        }
    }
}