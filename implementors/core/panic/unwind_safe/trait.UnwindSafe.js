(function() {var implementors = {};
implementors["elastic_elgamal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/app/struct.SingleChoice.html\" title=\"struct elastic_elgamal::app::SingleChoice\">SingleChoice</a>","synthetic":true,"types":["elastic_elgamal::app::choice::SingleChoice"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/app/struct.MultiChoice.html\" title=\"struct elastic_elgamal::app::MultiChoice\">MultiChoice</a>","synthetic":true,"types":["elastic_elgamal::app::choice::MultiChoice"]},{"text":"impl&lt;G, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/app/struct.ChoiceParams.html\" title=\"struct elastic_elgamal::app::ChoiceParams\">ChoiceParams</a>&lt;G, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::app::choice::ChoiceParams"]},{"text":"impl&lt;G, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/app/struct.EncryptedChoice.html\" title=\"struct elastic_elgamal::app::EncryptedChoice\">EncryptedChoice</a>&lt;G, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"elastic_elgamal/app/trait.ProveSum.html\" title=\"trait elastic_elgamal::app::ProveSum\">ProveSum</a>&lt;G&gt;&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/app/trait.ProveSum.html#associatedtype.Proof\" title=\"type elastic_elgamal::app::ProveSum::Proof\">Proof</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::app::choice::EncryptedChoice"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"elastic_elgamal/app/enum.ChoiceVerificationError.html\" title=\"enum elastic_elgamal::app::ChoiceVerificationError\">ChoiceVerificationError</a>","synthetic":true,"types":["elastic_elgamal::app::choice::ChoiceVerificationError"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/app/struct.QuadraticVotingParams.html\" title=\"struct elastic_elgamal::app::QuadraticVotingParams\">QuadraticVotingParams</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::app::quadratic_voting::QuadraticVotingParams"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/app/struct.QuadraticVotingBallot.html\" title=\"struct elastic_elgamal::app::QuadraticVotingBallot\">QuadraticVotingBallot</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::app::quadratic_voting::QuadraticVotingBallot"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"elastic_elgamal/app/enum.QuadraticVotingError.html\" title=\"enum elastic_elgamal::app::QuadraticVotingError\">QuadraticVotingError</a>","synthetic":true,"types":["elastic_elgamal::app::quadratic_voting::QuadraticVotingError"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.VerifiableDecryption.html\" title=\"struct elastic_elgamal::VerifiableDecryption\">VerifiableDecryption</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::decryption::VerifiableDecryption"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.CandidateDecryption.html\" title=\"struct elastic_elgamal::CandidateDecryption\">CandidateDecryption</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::decryption::CandidateDecryption"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.Ciphertext.html\" title=\"struct elastic_elgamal::Ciphertext\">Ciphertext</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::encryption::Ciphertext"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.DiscreteLogTable.html\" title=\"struct elastic_elgamal::DiscreteLogTable\">DiscreteLogTable</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::encryption::DiscreteLogTable"]},{"text":"impl&lt;G, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.CiphertextWithValue.html\" title=\"struct elastic_elgamal::CiphertextWithValue\">CiphertextWithValue</a>&lt;G, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::encryption::CiphertextWithValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/group/struct.Curve25519Subgroup.html\" title=\"struct elastic_elgamal::group::Curve25519Subgroup\">Curve25519Subgroup</a>","synthetic":true,"types":["elastic_elgamal::group::curve25519::Curve25519Subgroup"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/group/struct.Generic.html\" title=\"struct elastic_elgamal::group::Generic\">Generic</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::group::generic::Generic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/group/struct.Ristretto.html\" title=\"struct elastic_elgamal::group::Ristretto\">Ristretto</a>","synthetic":true,"types":["elastic_elgamal::group::ristretto::Ristretto"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/group/struct.RandomBytesProvider.html\" title=\"struct elastic_elgamal::group::RandomBytesProvider\">RandomBytesProvider</a>&lt;'a&gt;","synthetic":true,"types":["elastic_elgamal::group::RandomBytesProvider"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.SecretKey.html\" title=\"struct elastic_elgamal::SecretKey\">SecretKey</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::keys::SecretKey"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.PublicKey.html\" title=\"struct elastic_elgamal::PublicKey\">PublicKey</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::keys::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"elastic_elgamal/enum.PublicKeyConversionError.html\" title=\"enum elastic_elgamal::PublicKeyConversionError\">PublicKeyConversionError</a>","synthetic":true,"types":["elastic_elgamal::keys::PublicKeyConversionError"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.Keypair.html\" title=\"struct elastic_elgamal::Keypair\">Keypair</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::keys::Keypair"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.LogEqualityProof.html\" title=\"struct elastic_elgamal::LogEqualityProof\">LogEqualityProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::proofs::log_equality::LogEqualityProof"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.SumOfSquaresProof.html\" title=\"struct elastic_elgamal::SumOfSquaresProof\">SumOfSquaresProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::proofs::mul::SumOfSquaresProof"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.ProofOfPossession.html\" title=\"struct elastic_elgamal::ProofOfPossession\">ProofOfPossession</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::proofs::possession::ProofOfPossession"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.RangeDecomposition.html\" title=\"struct elastic_elgamal::RangeDecomposition\">RangeDecomposition</a>","synthetic":true,"types":["elastic_elgamal::proofs::range::RangeDecomposition"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.PreparedRange.html\" title=\"struct elastic_elgamal::PreparedRange\">PreparedRange</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::proofs::range::PreparedRange"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.RangeProof.html\" title=\"struct elastic_elgamal::RangeProof\">RangeProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::proofs::range::RangeProof"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/struct.RingProof.html\" title=\"struct elastic_elgamal::RingProof\">RingProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::proofs::ring::RingProof"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"elastic_elgamal/enum.VerificationError.html\" title=\"enum elastic_elgamal::VerificationError\">VerificationError</a>","synthetic":true,"types":["elastic_elgamal::proofs::VerificationError"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/sharing/struct.PublicKeySet.html\" title=\"struct elastic_elgamal::sharing::PublicKeySet\">PublicKeySet</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::sharing::key_set::PublicKeySet"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/sharing/struct.Dealer.html\" title=\"struct elastic_elgamal::sharing::Dealer\">Dealer</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::sharing::participant::Dealer"]},{"text":"impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/sharing/struct.ActiveParticipant.html\" title=\"struct elastic_elgamal::sharing::ActiveParticipant\">ActiveParticipant</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ElementOps.html\" title=\"trait elastic_elgamal::group::ElementOps\">ElementOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ElementOps.html#associatedtype.Element\" title=\"type elastic_elgamal::group::ElementOps::Element\">Element</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"elastic_elgamal/group/trait.ScalarOps.html\" title=\"trait elastic_elgamal::group::ScalarOps\">ScalarOps</a>&gt;::<a class=\"associatedtype\" href=\"elastic_elgamal/group/trait.ScalarOps.html#associatedtype.Scalar\" title=\"type elastic_elgamal::group::ScalarOps::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["elastic_elgamal::sharing::participant::ActiveParticipant"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"elastic_elgamal/sharing/enum.Error.html\" title=\"enum elastic_elgamal::sharing::Error\">Error</a>","synthetic":true,"types":["elastic_elgamal::sharing::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"elastic_elgamal/sharing/struct.Params.html\" title=\"struct elastic_elgamal::sharing::Params\">Params</a>","synthetic":true,"types":["elastic_elgamal::sharing::Params"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()