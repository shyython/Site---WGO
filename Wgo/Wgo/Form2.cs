using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.TextBox;
using MySql.Data.MySqlClient;
using System;
using static System.Net.Mime.MediaTypeNames;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.TextBox;

namespace Wgo
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void Form2_Load(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label14_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (ValidaDados())
            {
                SalvarUsuario();
                MessageBox.Show("Seus Dados foram salvos");
            }
        }
        private bool ValidaDados()
        {
            if (TxtNomeEmpresa.Text == "")
            {
                LblNomeEmpresa.ForeColor = Color.Red;
                return false;
            }
            else if (MaskCnpjEmpresa.Text == "  .   .   /    -")
            {
                LblCpnj.ForeColor = Color.Red;
                return false;
            }
            else if (TxtEmailEmpresa.Text == "")
            {
                LblEmailEmpresa.ForeColor = Color.Red;
                return false;
            }
            else if (MaskTelefoneEmpresa.Text == "  -      ")
            {
                LblTelefoneEmpresa.ForeColor = Color.Red;
                return false;
            }
            else if (MaskCepEmpresa.Text == "     -")
            {
                LblCep.ForeColor = Color.Red;
                return false;
            }
            else if (MaskNumeroEmpresa.Text == "")
            {
                LblNumeroEmpresa.ForeColor = Color.Red;
                return false;
            }
            else if (TxtNomeContato.Text == "")
            {
                LblNomeContato.ForeColor = Color.Red;
                return false;
            }
            else if (TxtEmailContato.Text == "")
            {
                LblEmailContato.ForeColor = Color.Red;
                return false;
            }
            else if (MaskTelefoneContato.Text == "  -      ")
            {
                LblTelefoneContato.ForeColor = Color.Red;
                return false;
            }
            else if (TxtAreaContato.Text == "")
            {
                lblarea.ForeColor = Color.Red;
                return false;
            }
            else if (ComboPreferencia.Text == "")
            {
                LblPreferencia.ForeColor = Color.Red;
                return false;
            }
            else if (ComboRamo.Text == "")
            {
                LblRamo.ForeColor = Color.Red;
                return false;
            }

            return true;
        }
        private bool SalvarUsuario()
        {
            int RowAffect = 0;

            try
            {
                string strigConexao = "Server = localhost; Database = wgo; User Id = root; Password = ;";
                MySqlConnection conexao = new MySqlConnection(strigConexao);

                MySqlCommand comando = new MySqlCommand();
                string sql;
                sql = "INSERT INTO Dados_Empresa (Nome, CNPJ, Email, Telefone, Cep, Num_Endereco) VALUES " + "('" + TxtNomeEmpresa.Text + "', '" + MaskCnpjEmpresa.Text + "', '" + TxtEmailEmpresa.Text + "', '" + MaskTelefoneEmpresa.Text + "', '" + MaskCepEmpresa.Text + "' , ' " + MaskNumeroEmpresa.Text + "')";
                conexao.Open();
                comando.Connection = conexao;
                comando.CommandText = sql;

                RowAffect = comando.ExecuteNonQuery();

                if (RowAffect >= 1)
                {
                    return true;

                }
                else
                {
                    return false;
                }

            }

            catch (Exception ex)
            {
                MessageBox.Show("Ocorreu um erro ao tentar acessar o banco" + ex.Message, "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information); return false;

            }
        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void TxtNomeEmpresa_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
